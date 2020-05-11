import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { TextModelElement } from '../text-model-element';
import { DontCodeModel,DontCodeSchema,Change, ChangeType  } from '@dontcode/core';
import { SubTextModelElement } from '../sub-text-model-element';
import { EditorElement } from '../../../routes/editor/editor-element';
import { HttpClient } from '@angular/common/http';
import { ChangeUpdateService } from '../../change/services/change-update.service';

/**
  Manages the model to be edited and as well the list of elements that informs the UI about what to display.
 */
@Injectable({
  providedIn: 'root'
})
export class TextService {

  protected jsonSchema:any;

  event = new ReplaySubject<TextModelElement> ();

  // Temporary variables when recursively reading elements
  listOfElementsStack:EditorElement[][]=[];
  positionStack:string[]=[];

  rootListOfElements:EditorElement[] = [];
  mapOfElements = new Map<string, EditorElement[]>();
  mapOfJson = new Map<string, any>();


  constructor(protected http:HttpClient, protected updateService:ChangeUpdateService) {
    this.listOfElementsStack.push(this.rootListOfElements);
    this.mapOfElements.set('', this.rootListOfElements);
    this.positionStack.push('');
    this.event
      .subscribe(textAction => {
        let position = this.currentPosition()+'/'+textAction.relativeId;
        if (textAction.id===DontCodeModel.ROOT) {
          this.positionStack.push(textAction.id);
          position = textAction.id;
        }
        if( textAction instanceof SubTextModelElement) {
          const subAction = textAction as SubTextModelElement;
          if (subAction.isStart()) {
            this.currentList().push(EditorElement.fromTextAction (textAction, position));
            this.mapOfElements.set(position, [new EditorElement(position+'/a', position+'/a', textAction.id, 'arrayItem' )]);

            const newList:EditorElement[]=[];
            this.listOfElementsStack.push(newList );
            this.positionStack.push(position+'/a');
            this.mapOfElements.set(this.currentPosition(), newList);
          } else {
            this.listOfElementsStack.pop();
            this.positionStack.pop();
            this.currentList().push(EditorElement.fromTextAction (textAction, this.currentPosition()));
          }
        }
        else {
          this.currentList().push(EditorElement.fromTextAction (textAction, position));
        }
      });
  }

  protected currentList (): EditorElement[] {
    if( this.listOfElementsStack.length==0)
      return null;
    return this.listOfElementsStack[this.listOfElementsStack.length-1];
  }
  protected currentPosition (): string {
    if( this.positionStack.length==0)
      return null;
    return this.positionStack[this.positionStack.length-1];
  }

  resetSchema () {
    this.rootListOfElements.length=0;
    this.mapOfElements.clear();
    this.positionStack.length=0;
    this.mapOfElements.clear();
    this.mapOfJson.clear();
    this.listOfElementsStack.push(this.rootListOfElements);
    this.mapOfElements.set('', this.rootListOfElements);
    this.positionStack.push('');
    this.updateService.pushChange(new Change(ChangeType.RESET, null,null));
  }

  /**
   * Read the schema to integrate it in the list
   * @param schemaAsJson
   */
  readSchema (schemaAsJson:any) {
    this.jsonSchema = schemaAsJson;
    const root= this.goto(schemaAsJson, DontCodeSchema.ROOT);
    if( root) {
      this.event.next(new TextModelElement(DontCodeModel.ROOT, DontCodeModel.ROOT));
      this.readSubSchema (root['properties'], DontCodeModel.ROOT);
    }
  }

  readSubSchema (parent: any, position:string) {
    this.mapOfJson.set (position, parent);
    parent = this.resolveRefs (parent);
    Object.entries(parent).forEach (([key,value]) => {
      switch (this.schemaTypeOf(value)) {
        case 'string':
          this.event.next(new TextModelElement(position+'/'+key));
          break;
        case 'enum':
          this.event.next(new TextModelElement(position+'/'+key, ...value['enum']));
          break;
        case 'array':
          this.event.next(new SubTextModelElement(position+'/'+key
            ,SubTextModelElement.MULTIPLE, SubTextModelElement.START));
          this.readSubSchema(value['items'], position+'/'+key);
          this.event.next(new SubTextModelElement(position+'/'+key
            ,SubTextModelElement.MULTIPLE, SubTextModelElement.END));
          break;
        case 'object':
          this.event.next(new SubTextModelElement(position+'/'+key
            ,SubTextModelElement.SINGLE, SubTextModelElement.START));
          this.readSubSchema(value['properties'], position+'/'+key);
          this.event.next(new SubTextModelElement(position+'/'+key
            ,SubTextModelElement.SINGLE,SubTextModelElement.END));
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

  getList(fromId?:string) : EditorElement[] {
    if (!fromId)
      fromId='';
    return this.mapOfElements.get(fromId);
  }

  getNextId(position: string) {
    const list = this.getList(position);
    let tentative = 97+list.length;
    let found = false;
    let id : string;
    do {
      id = String.fromCharCode(tentative);
      const toTest = position+'/'+id;
      found = false;
      list.forEach(value => {
          if (value.position===toTest) {
            found=true;
          }
        }
      );
      tentative++;
    } while(found);
    return id;
  }

  addSubElement(element: EditorElement) {
    const list = this.getList(element.position);
    const subSchema = this.mapOfJson.get(element.schemaPosition);
    const nextId = this.getNextId (element.position);

    list.push (new EditorElement(element.position+'/'+nextId, element.position+'/'+nextId, element.schemaPosition, 'arrayItem' ));

    this.listOfElementsStack.length=0;
    this.positionStack.length=0;
    const newList:EditorElement[]=[];
    this.listOfElementsStack.push(newList );
    this.positionStack.push(element.position+'/'+nextId);
    this.mapOfElements.set(this.currentPosition(), newList);

    this.readSubSchema(subSchema, element.schemaPosition);


  }

  readSchemaFormUrl(url: string) {
    this.http.get(url, {responseType:'json'}).subscribe(value => {
      this.readSchema(value);
    });

  }
}
