import { Injectable } from '@angular/core';
import { Change } from '../change';
import { BroadcastChannel } from 'broadcast-channel';

@Injectable({
  providedIn: 'root'
})
export class ChangeUpdateService {

  public static readonly CHANNEL_CHANGE_NAME='ide-ui-changes';
  protected listOfChanges: Change[]=[];
  protected channel: BroadcastChannel<Change>;

  constructor() {
    console.log('Creating channel');
    this.channel = new BroadcastChannel(ChangeUpdateService.CHANNEL_CHANGE_NAME);
  }

  pushChange (newChange:Change) {
    console.log('Change pushed');
    this.listOfChanges.push(newChange);
    this.channel.postMessage(newChange);
  }

  getListOfChanges (): Change[] {
    return this.listOfChanges;
  }
}
