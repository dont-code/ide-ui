import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TextAction } from '../text-action';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  event = new Observable<TextAction> ((observer) => {
    observer.next(new TextAction('createTxt','I want to create an application'));
    observer.next(new TextAction('nameTxt','with name'));
    observer.next(new TextAction('appName'));
    observer.next(new TextAction('toText','to'));
    observer.next(new TextAction('appMainAction','manage', 'view'));
    observer.next(new TextAction('appMainEntityName'));
    observer.next(new TextAction(null));

    observer.next(new TextAction('entityTxt', 'The entity is made of'));
    observer.next(new TextAction('entityPropName'));
    observer.next(new TextAction('entityPropNameTxt', 'of type'));
    observer.next(new TextAction('entityPropNameType', 'name','description','string','number','boolean'));
    observer.next(new TextAction('entityPropDescription'));
    observer.next(new TextAction('entityPropDescTxt', 'of type'));
    observer.next(new TextAction('entityPropDescType', 'name','description','string','number','boolean'));
    observer.next(new TextAction('entityPropDone'));
    observer.next(new TextAction('entityPropDoneTxt', 'of type'));
    observer.next(new TextAction('entityPropDoneType', 'name','description','string','number','boolean'));

    observer.next(new TextAction(null));
    observer.next(new TextAction('firstScreenTxt', 'It will first display'));
    observer.next(new TextAction('firstScreenType', 'a list', 'an editor', 'a view'));

  });

  constructor() { }

  listEvents (): Observable<TextAction> {
    return this.event;
  }
}
