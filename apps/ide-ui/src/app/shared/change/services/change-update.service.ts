import {Injectable} from "@angular/core";
import {Change, ChangeType, Message, MessageType} from "@dontcode/core";
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

  protected ideServicesWebSocket: WebSocketSubject<Message>|null=null;
  protected connectionStatus: ReplaySubject<string>=new ReplaySubject<string>(1);

  /**
   * The Id of the session as returned by the services. This is used to tell the previewer to listen only to this session
   * @protected
   */
  protected sessionIdSubject = new ReplaySubject<string|undefined>(1);
  protected sessionId?:string;

  constructor() {
    console.debug('Creating channel');
    this.channel = new BroadcastChannel(ChangeUpdateService.CHANNEL_CHANGE_NAME);
  }

  protected openWebSocket (): Promise<WebSocketSubject<Message>> {
    if (this.ideServicesWebSocket) {
      if ((!this.ideServicesWebSocket.isStopped) && (!this.ideServicesWebSocket.closed)) {
        return Promise.resolve(this.ideServicesWebSocket);
      }
    }
    const ret = new Promise<WebSocketSubject<Message>>((resolve, reject) => {
      const config: WebSocketSubjectConfig<any> = {
        url: environment.webSocketUrl,
        closeObserver: {
          next: value => {
            console.debug("Close", value);

          }
        },
        openObserver: {
          next: value => {
            if (this.ideServicesWebSocket)
              resolve(this.ideServicesWebSocket);
            else
              reject('No WebSocket');
          },
          error: err => {
            console.error("error connecting socket", err);
            reject(err);
          }
        }
      }

      this.ideServicesWebSocket = webSocket(config);
      this.connectionStatus.next("connected");
      this.sessionIdSubject.next(undefined);
      this.ideServicesWebSocket.asObservable().subscribe({
        next: msg => {

          //console.log('message received: ' , msg);
          const newId=msg?.sessionId;
          if ((newId) && (newId !== this.sessionId)){
            console.debug('Received SessionId ', newId);
            this.sessionId=newId;
            this.sessionIdSubject.next(newId);
          }
        },
        // Called whenever there is a message from the server
        error: err => {
          console.error(err);
          this.ideServicesWebSocket?.unsubscribe();
          this.ideServicesWebSocket = null;
          this.connectionStatus.next("ERROR:" + err);
          this.sessionIdSubject.next(undefined);
        },
        // Called if WebSocket API signals some kind of error
        complete: () => {
          console.debug('complete');
          this.ideServicesWebSocket?.unsubscribe();
          this.ideServicesWebSocket = null;
          this.connectionStatus.next("closed");
          this.sessionIdSubject.next(undefined);
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
    this.updateSocket(new Message (MessageType.CHANGE, this.sessionId, newChange));
  }

  async updateSocket (newChange:Message) {
    this.openWebSocket().then (socket => socket.next(newChange));
  }

  getListOfChanges (): Change[] {
    return this.listOfChanges;
  }

  getConnectionStatus (): Observable<string> {
    return this.connectionStatus;
  }
  getSessionId (): Observable<string|undefined> {
    return this.sessionIdSubject;
  }
}
