import {Injectable} from "@angular/core";
import {Change, ChangeType, DontCodeModel, Message, MessageType} from "@dontcode/core";
import {BroadcastChannel} from "broadcast-channel";
import {webSocket, WebSocketSubject, WebSocketSubjectConfig} from "rxjs/webSocket";

import {Observable, ReplaySubject} from "rxjs";
import { CommonConfigService } from "@dontcode/plugin-common";

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

  protected currentSocketUrl: string|null =null;

  constructor(protected configService:CommonConfigService) {
    console.debug('Creating channel');
    this.channel = new BroadcastChannel(ChangeUpdateService.CHANNEL_CHANGE_NAME);

    this.configService.getUpdates().subscribe((newConfig) => {
      const socketChanged = newConfig.ideWebSocketUrl!=this.currentSocketUrl;
      if (socketChanged) {
        this.currentSocketUrl=newConfig.ideWebSocketUrl??null;
          // Close the current socket, it will be opened when needed
        if (this.ideServicesWebSocket) {
          if (!this.ideServicesWebSocket.closed) {
            this.ideServicesWebSocket?.complete();
          }
        }
        if( this.currentSocketUrl!=null)
        this.pushChange(new Change(ChangeType.RESET, DontCodeModel.ROOT,null));

      }
    });

    this.connectionStatus.next("closed");
    this.sessionIdSubject.next(undefined);

  }

  protected openWebSocket (): Promise<WebSocketSubject<Message>> {
      // Check if there is one already opened
    if (this.ideServicesWebSocket) {
      if (!this.ideServicesWebSocket.closed) {
        return Promise.resolve(this.ideServicesWebSocket);
      }
    }
      // If not, then check if we can open one
    const socketUrl=this.currentSocketUrl;
    if (socketUrl==null) {
      return Promise.reject("No Websocket Url to connect to")
    } else {
      const ret = new Promise<WebSocketSubject<Message>>((resolve, reject) => {
        const config: WebSocketSubjectConfig<any> = {
          url: socketUrl,
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
  }

  pushChange (newChange:Change): Promise<void> {
    //console.log('Change pushed');
    if( newChange.type===ChangeType.RESET) {
      this.listOfChanges.length=0;
    } else {
      this.listOfChanges.push(newChange);
    }
    return Promise.all ([
      this.channel.postMessage(newChange),
      this.updateSocket(new Message (MessageType.CHANGE, this.sessionId, newChange))
      ]
    ).then ();
    
  }

  updateSocket (newChange:Message): Promise<void> {
    return this.openWebSocket().then (socket => socket.next(newChange));
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
