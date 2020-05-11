import { Injectable } from '@angular/core';
import { DontCodeModel } from '@dontcode/core';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  texts = new Map<string, string> ([
    [DontCodeModel.ROOT, 'I want to create'],
    [DontCodeModel.APP_TYPE, 'an application'],
    [DontCodeModel.APP_NAME, 'with the name'],
    [DontCodeModel.APP_NAME+'-desc', 'Enter the name'],
    [DontCodeModel.APP_ENTITIES, 'handing the following items:'],
    [DontCodeModel.APP_ENTITIES+'-desc', 'List of items managed'],
    [DontCodeModel.APP_ENTITIES_NAME, 'An item with the name'],
    [DontCodeModel.APP_ENTITIES_NAME+'-desc', 'Name of item'],
    [DontCodeModel.APP_FIELDS, 'containing the following fields:'],
    [DontCodeModel.APP_FIELDS+'-desc', 'List of fields'],
    [DontCodeModel.APP_FIELDS_NAME, 'A field named'],
    [DontCodeModel.APP_FIELDS_NAME+'-desc', 'Name of field'],
    [DontCodeModel.APP_FIELDS_TYPE, 'with the type'],
    [DontCodeModel.APP_FIELDS_TYPE+'-desc', 'Type of field'],
    [DontCodeModel.APP_SCREENS, 'Showing the screens'],
    [DontCodeModel.APP_SCREENS+'-desc', 'List of screens'],
    [DontCodeModel.APP_SCREENS_NAME, 'A screen with the name'],
    [DontCodeModel.APP_SCREENS_NAME+'-desc', 'Name of screen'],
    [DontCodeModel.APP_SCREENS_LAYOUT, 'and the layout'],
    [DontCodeModel.APP_SCREENS_LAYOUT+'-desc', 'layout of the screen'],
    [DontCodeModel.APP_COMPONENTS, 'displaying parts:'],
    [DontCodeModel.APP_COMPONENTS+'-desc', 'List of parts'],
    [DontCodeModel.APP_COMPONENTS_TYPE, 'A part with the type'],
    [DontCodeModel.APP_COMPONENTS_TYPE+'-desc', 'Type of part']
  ]);

  constructor() { }

  toText (context:string, element?:string): string {
    let ret:string;
    if (element) {
      ret = this.texts.get(context+'/'+element);
      if (!ret) {
        ret = context+'/'+element;
      }
    }else {
      ret = this.texts.get(context);
      if (!ret)
        ret = context;
    }
    return ret;
  }

}
