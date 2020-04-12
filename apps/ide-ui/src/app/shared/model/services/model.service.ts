import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelAction } from '../model-action';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  event = new Observable<ModelAction> ((observer) => {
    observer.next(new ModelAction('createTxt','I want to create an application'));
    observer.next(new ModelAction('nameTxt','with name'));
    observer.next(new ModelAction('appName'));
    observer.next(new ModelAction('toText','to'));
    observer.next(new ModelAction('appMainAction','manage', 'view'));
    observer.next(new ModelAction('appMainEntityName'));
    observer.next(new ModelAction(null));

    observer.next(new ModelAction('entityTxt', 'The entity is made of'));
    observer.next(new ModelAction('entityPropName'));
    observer.next(new ModelAction('entityPropNameTxt', 'of type'));
    observer.next(new ModelAction('entityPropNameType', 'name','description','string','number','boolean'));
    observer.next(new ModelAction('entityPropDescription'));
    observer.next(new ModelAction('entityPropDescTxt', 'of type'));
    observer.next(new ModelAction('entityPropDescType', 'name','description','string','number','boolean'));
    observer.next(new ModelAction('entityPropDone'));
    observer.next(new ModelAction('entityPropDoneTxt', 'of type'));
    observer.next(new ModelAction('entityPropDoneType', 'name','description','string','number','boolean'));

    observer.next(new ModelAction(null));
    observer.next(new ModelAction('firstScreenTxt', 'It will first display'));
    observer.next(new ModelAction('firstScreenType', 'a list', 'an editor', 'a view'));

  });

  constructor() { }

  listEvents (): Observable<ModelAction> {
    return this.event;
  }
}
