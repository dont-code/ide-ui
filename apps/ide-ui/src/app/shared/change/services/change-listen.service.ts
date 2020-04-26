import { Injectable, Provider } from '@angular/core';
import { ChangeUpdateService } from './change-update.service';
import { BroadcastChannel } from 'broadcast-channel';
import { Change, ChangeType } from '../change';
import { Observable, Subject, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeListenService {

  protected channel: BroadcastChannel<Change>;
  protected listOfChanges: Change[]=[];

  protected changeEmitter = new Subject<Change> ();

  constructor() {
    this.channel = new BroadcastChannel(ChangeUpdateService.CHANNEL_CHANGE_NAME);
    console.log('Channel receiver created');
    this.channel.onmessage = msg => {
//      console.log('Change received',msg, this.listOfChanges.length);
      this.listOfChanges.push(msg);
      this.changeEmitter.next(msg);
    };
  }

  getListOfChanges (): Change[] {
    return this.listOfChanges;
  }

  getChangeEvents (): Observable<Change> {
    return this.changeEmitter;
  }

}
