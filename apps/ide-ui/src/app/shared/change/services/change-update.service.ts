import { Injectable } from '@angular/core';
import { Change, ChangeType } from '@dontcode/core';
import { BroadcastChannel } from 'broadcast-channel';
import { webSocket, WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';

import {environment} from '../../../../environments/environment';
import {Observable, ReplaySubject, Subject} from "rxjs";
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

  constructor() {
    console.log('Creating channel');
    this.channel = new BroadcastChannel(ChangeUpdateService.CHANNEL_CHANGE_NAME);

  }

  protected openWebSocket () :WebSocketSubject<Change> {
    if (this.ideServicesWebSocket) {
      if ((!this.ideServicesWebSocket.isStopped) && (!this.ideServicesWebSocket.closed)) {
        return this.ideServicesWebSocket;
      }
    }
    const config:WebSocketSubjectConfig<any> = {
      url: environment.webSocketUrl
    }

    this.ideServicesWebSocket = webSocket(config);
    this.connectionStatus.next("connected");
    this.ideServicesWebSocket.subscribe(
      msg => console.log('message received: ' + msg),
      // Called whenever there is a message from the server
      err => {
        console.log(err);
        this.ideServicesWebSocket.unsubscribe();
        this.ideServicesWebSocket=null;
        this.connectionStatus.next("ERROR:"+err);
      },
      // Called if WebSocket API signals some kind of error
      () => {
        console.log('complete');
        this.ideServicesWebSocket.unsubscribe();
        this.ideServicesWebSocket = null;
        this.connectionStatus.next("closed");
      }
      // Called when connection is closed (for whatever reason)
    );
    return this.ideServicesWebSocket;
  }

  pushChange (newChange:Change): void {
    console.log('Change pushed');
    if( newChange.type===ChangeType.RESET) {
      this.listOfChanges.length=0;
    } else {
      this.listOfChanges.push(newChange);
    }
    this.channel.postMessage(newChange);
    this.updateSocket(newChange);
  }

  async updateSocket (newChange:Change) {
    this.openWebSocket().next(newChange);
  }

  getListOfChanges (): Change[] {
    return this.listOfChanges;
  }

  getConnectionStatus (): Observable<string> {
    return this.connectionStatus;
  }
}
