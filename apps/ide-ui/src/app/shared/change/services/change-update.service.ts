import {Injectable} from "@angular/core";
import {Change, ChangeType} from "@dontcode/core";
import {BroadcastChannel} from "broadcast-channel";
import {webSocket, WebSocketSubject, WebSocketSubjectConfig} from "rxjs/webSocket";

import {environment} from "../../../../environments/environment";
import {Observable, ReplaySubject} from "rxjs";

/**
 * Updates all changes to the edited elements (what the user entered in the IDE)
 * to a broadcastchannel (for dev tab) and the websocket to the services.
 */
@Injectable({
  providedIn: 'root'
})
export class ChangeUpdateService {

  public static readonly CHANNEL_CHANGE_NAME='ide-ui-changes';
  protected listOfChanges: Change[]=[];
  protected channel: BroadcastChannel<Change>;

  protected ideServicesWebSocket: WebSocketSubject<Change>;
  protected connectionStatus: ReplaySubject<string>=new ReplaySubject<string>(1);

  /**
   * The Id of the session as returned by the services. This is used to tell the previewer to listen only to this session
   * @protected
   */
  protected sessionIdSubject = new ReplaySubject<string>(1);
  protected sessionId;

  constructor() {
    console.log('Creating channel');
    this.channel = new BroadcastChannel(ChangeUpdateService.CHANNEL_CHANGE_NAME);
  }

  protected openWebSocket (): Promise<WebSocketSubject<Change>> {
    if (this.ideServicesWebSocket) {
      if ((!this.ideServicesWebSocket.isStopped) && (!this.ideServicesWebSocket.closed)) {
        return Promise.resolve(this.ideServicesWebSocket);
      }
    }
    const ret = new Promise<WebSocketSubject<Change>>((resolve, reject) => {
      const config: WebSocketSubjectConfig<any> = {
        url: environment.webSocketUrl,
        closeObserver: {
          next: value => {
            console.log("Close", value);

          }
        },
        openObserver: {
          next: value => {
            resolve(this.ideServicesWebSocket);
          },
          error: err => {
            console.log("error connecting socket", err);
            reject(err);
          }
        }
      }

      this.ideServicesWebSocket = webSocket(config);
      this.connectionStatus.next("connected");
      this.ideServicesWebSocket.asObservable().subscribe({
        next: msg => {
          const resp = msg as unknown as Response;
          //console.log('message received: ' , msg);
          const newId=resp?.SessionId;
          if ((newId) && (newId !== this.sessionId)){
            console.log('Received SessionId ', newId);
            this.sessionId=newId;
            this.sessionIdSubject.next(newId);
          }
        },
        // Called whenever there is a message from the server
        error: err => {
          console.log(err);
          this.ideServicesWebSocket.unsubscribe();
          this.ideServicesWebSocket = null;
          this.connectionStatus.next("ERROR:" + err);
          this.sessionIdSubject.next(null);
        },
        // Called if WebSocket API signals some kind of error
        complete: () => {
          console.log('complete');
          this.ideServicesWebSocket.unsubscribe();
          this.ideServicesWebSocket = null;
          this.connectionStatus.next("closed");
          this.sessionIdSubject.next(null);
        }
        // Called when connection is closed (for whatever reason)
      });
    });
    return ret;
  }

  pushChange (newChange:Change): void {
    //console.log('Change pushed');
    if( newChange.type===ChangeType.RESET) {
      this.listOfChanges.length=0;
    } else {
      this.listOfChanges.push(newChange);
    }
    this.channel.postMessage(newChange);
    this.updateSocket(newChange);
  }

  async updateSocket (newChange:Change) {
    this.openWebSocket().then (socket => socket.next(newChange));
  }

  getListOfChanges (): Change[] {
    return this.listOfChanges;
  }

  getConnectionStatus (): Observable<string> {
    return this.connectionStatus;
  }
  getSessionId (): Observable<string> {
    return this.sessionIdSubject;
  }
}

class Response {
  result;
  SessionId;
}
