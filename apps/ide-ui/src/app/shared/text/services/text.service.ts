import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { TextAction } from '../text-action';
import { DontCodeModel } from '../../model/dont-code-model';
import { DontCodeSchema } from '../../model/dont-code-schema';
import { SubTextAction } from '../sub-text-action';
import { EditorElement } from '../../../routes/editor/editor-element';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  protected jsonSchema:any;

  event = new ReplaySubject<TextAction> ();

  texts = new Map<string, string> ([
    [DontCodeModel.ROOT, 'I want to create'],
    [DontCodeModel.ROOT+'/'+DontCodeModel.APP_NAME_NODE, 'name'],
  ]);
  listOfElementsStack:EditorElement[][]=[];
  rootListOfElements:EditorElement[] = [];
  mapOfElements = new Map<string, EditorElement[]>();

  /*  event = new Observable<TextAction> ((observer) => {
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

    });*/

  constructor() {
    this.listOfElementsStack.push(this.rootListOfElements);
    this.mapOfElements.set('', this.rootListOfElements);
    this.event
      .subscribe(textAction => {
        if( textAction instanceof SubTextAction) {
          const subAction = textAction as SubTextAction;
          if (subAction.isStart()) {
            this.currentList().push(EditorElement.fromTextAction (textAction));
            const newList:EditorElement[]=[];
            this.listOfElementsStack.push(newList );
            this.mapOfElements.set(subAction.id, newList);
          } else {
            this.listOfElementsStack.pop();
            this.currentList().push(EditorElement.fromTextAction (textAction));
          }
        }
        else {
          this.currentList().push(EditorElement.fromTextAction (textAction));
        }
      });
  }

  protected currentList (): EditorElement[] {
    if( this.listOfElementsStack.length==0)
      return null;
    return this.listOfElementsStack[this.listOfElementsStack.length-1];
  }

  /**
   * Read the schema to integrate it in the list
   * @param schemaAsJson
   */
  readSchema (schemaAsJson:any) {
    this.jsonSchema = schemaAsJson;
    const root= this.goto(schemaAsJson, DontCodeSchema.ROOT);
    if( root) {
      this.event.next(new TextAction(DontCodeModel.ROOT, this.toText (DontCodeModel.ROOT)));
      this.readSubSchema (root['properties'], DontCodeModel.ROOT);
    }
  }

  readSubSchema (parent: any, position:string) {
    parent = this.resolveRefs (parent);
    Object.entries(parent).forEach (([key,value]) => {
      switch (this.schemaTypeOf(value)) {
        case 'string':
          this.event.next(new TextAction(position+'/'+key));
          break;
        case 'enum':
          this.event.next(new TextAction(position+'/'+key, ...value['enum']));
          break;
        case 'array':
          this.event.next(new SubTextAction(position+'/'+key, this.toText(position+'/'+key)
            ,SubTextAction.MULTIPLE, SubTextAction.START));
          this.readSubSchema(value['items'], position+'/'+key);
          this.event.next(new SubTextAction(position+'/'+key, this.toText(position+'/'+key)
            ,SubTextAction.MULTIPLE, SubTextAction.END));
          break;
        case 'object':
          this.event.next(new SubTextAction(position+'/'+key,this.toText(position+'/'+key)
            ,SubTextAction.SINGLE, SubTextAction.START));
          this.readSubSchema(value['properties'], position+'/'+key);
          this.event.next(new SubTextAction(position+'/'+key, this.toText(position+'/'+key)
            ,SubTextAction.SINGLE,SubTextAction.END));
          break;
      }
    });
  }

  goto (entity: any, to:string): any {
    let ret = entity;
    to.split('/').forEach(value => {
      if( value!=='#' && (value!='')) {
        ret=ret[value];
      }
    });
    return ret;
  }

  resolveRefs (entity: any): any {
    let ret = entity;
    if( entity['$ref']) {
      let toFind:string = entity['$ref'];
      ret = this.goto(this.jsonSchema,toFind);
      if( ret['properties']) {
        ret = ret['properties'];
      }
    }
    return ret;
  }

  schemaTypeOf (entity: any): string {
    let ret =entity['type'];
    if(!ret) {
      if (entity['enum'])
        ret = 'enum'
    }
    return ret;
  }

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

  getList(fromId?:string) : EditorElement[] {
    if (!fromId)
      fromId='';
    return this.mapOfElements.get(fromId);
  }
}
