import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelAction } from '../model-action';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  event = new Observable<ModelAction> ((observer) => {
    observer.next(new ModelAction('create','I want to create an'));
    observer.next(new ModelAction('appType', 'application', 'module'));
    observer.next(new ModelAction('follow','with the following'));
    observer.next(new ModelAction('items','screens', 'reports'));
    observer.next(new ModelAction('available', 'available'));

  });

  constructor() { }

  listEvents (): Observable<ModelAction> {
    return this.event;
  }
}
