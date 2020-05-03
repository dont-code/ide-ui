import { Injectable } from '@angular/core';
import { Change, ChangeType } from '../change';
import { BroadcastChannel } from 'broadcast-channel';
import { webSocket, WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';

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

  myWebSocket: WebSocketSubject<Change>;

  constructor() {
    console.log('Creating channel');
    this.channel = new BroadcastChannel(ChangeUpdateService.CHANNEL_CHANGE_NAME);
  }

  protected openWebSocket () :WebSocketSubject<Change> {
    if (this.myWebSocket) {
      if ((!this.myWebSocket.isStopped) && (!this.myWebSocket.closed)) {
        return this.myWebSocket;
      }
    }
    const config:WebSocketSubjectConfig<any> = {
      url:'ws://localhost:8080/ide'
    }

    this.myWebSocket = webSocket(config);
    this.myWebSocket.subscribe(
      msg => console.log('message received: ' + msg),
      // Called whenever there is a message from the server
      err => {
        console.log(err);
        this.myWebSocket.unsubscribe();
        this.myWebSocket=null;
      },
      // Called if WebSocket API signals some kind of error
      () => {
        console.log('complete');
        this.myWebSocket.unsubscribe();
        this.myWebSocket = null;
      }
      // Called when connection is closed (for whatever reason)
    );
    return this.myWebSocket;
  }

  pushChange (newChange:Change) {
    console.log('Change pushed');
    if( newChange.type===ChangeType.RESET) {
      this.listOfChanges.length=0;
    } else {
      this.listOfChanges.push(newChange);
    }
    this.channel.postMessage(newChange);
    this.openWebSocket().next(newChange);
  }

  getListOfChanges (): Change[] {
    return this.listOfChanges;
  }
}
