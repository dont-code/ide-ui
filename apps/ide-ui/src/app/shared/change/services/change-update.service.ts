import { Injectable } from '@angular/core';
import { Change } from '../change';
import { BroadcastChannel } from 'broadcast-channel';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

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
    this.myWebSocket = webSocket('ws://localhost:8080/ide');
    this.myWebSocket.subscribe(
      msg => console.log('message received: ' + msg),
      // Called whenever there is a message from the server
      err => console.log(err),
      // Called if WebSocket API signals some kind of error
      () => console.log('complete')
      // Called when connection is closed (for whatever reason)
    );
  }

  pushChange (newChange:Change) {
    console.log('Change pushed');
    this.listOfChanges.push(newChange);
    this.channel.postMessage(newChange);
    this.myWebSocket.next(newChange);
  }

  getListOfChanges (): Change[] {
    return this.listOfChanges;
  }
}
