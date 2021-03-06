import { Injectable } from '@angular/core';
import { ChangeUpdateService } from './change-update.service';
import { BroadcastChannel } from 'broadcast-channel';
import {Change, ChangeType, dtcde} from '@dontcode/core';
import { Observable, ReplaySubject } from 'rxjs';
import {DontCodeModelManager} from "@dontcode/core";

/**
 * List to all the changes on the edited elements from the BroadCastChannel and updates
 * a list of changes from it.
 */
@Injectable({
  providedIn: 'root'
})
export class ChangeListenService {

  protected channel: BroadcastChannel<Change>;
  protected listOfChanges: Change[]=[];

  protected changeEmitter = new ReplaySubject<Change> ();
  protected modelMgr: DontCodeModelManager;

  constructor() {
    this.channel = new BroadcastChannel(ChangeUpdateService.CHANNEL_CHANGE_NAME);
    console.log('Channel receiver created');
    this.channel.onmessage = msg => {
      if( msg.type===ChangeType.RESET) {
        this.listOfChanges.length=0;
      } else {
        this.listOfChanges.push(msg);
      }
      this.changeEmitter.next(msg);
      if (msg.type===ChangeType.RESET)
        this.resetEmitter ();
    };
    this.modelMgr = dtcde.getModelManager();
    this.modelMgr.receiveUpdatesFrom(this.changeEmitter);

  }

  resetEmitter () {
    const newReplay = new ReplaySubject<Change>();
    newReplay.observers=this.changeEmitter.observers;
    this.changeEmitter=newReplay;
  }

  getListOfChanges (): Change[] {
    return this.listOfChanges;
  }

  getChangeEvents (): Observable<Change> {
    return this.changeEmitter;
  }

}
