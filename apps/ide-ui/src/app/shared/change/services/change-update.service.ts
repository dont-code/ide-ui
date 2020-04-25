import { Injectable } from '@angular/core';
import { Change } from '../change';

@Injectable({
  providedIn: 'root'
})
export class ChangeUpdateService {

  protected listOfChanges: Change[]=[];
  constructor() { }

  pushChange (newChange:Change) {
    this.listOfChanges.push(newChange);
  }

  getListOfChanges (): Change[] {
    return this.listOfChanges;
  }
}
