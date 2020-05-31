import { Injectable } from "@angular/core";
import { Change, ChangeType, DontCodeModel, DontCodeSchemaItem, AbstractSchemaItem } from "@dontcode/core";
import { EditorElement, EditorElementType } from "../../../routes/editor/editor-element";
import { HttpClient } from "@angular/common/http";
import { ChangeUpdateService } from "../../change/services/change-update.service";

/**
  Manages the model to be edited and as well the list of elements that informs the UI about what to display.
 */
@Injectable({
  providedIn: 'root'
})
export class TextService {

  protected jsonSchema:DontCodeSchemaItem;

//  event = new ReplaySubject<TextModelElement> ();

  // Temporary variables when recursively reading elements
  /*listOfElementsStack:EditorElement[][]=[];
  positionStack:string[]=[];*/

  protected rootElement:EditorElement;
  /**
   * Stores the array of EditorElement one can find at a specific position in the edited data
   * For example:
   *  'creation/entities/a/' => The list of editor elements for the first entity
   *  'creation/entities/b/' => The list of editor elements for the second entity
   */
  //mapOfElements = new Map<string, EditorElement[]>();

//  rootListOfElements:EditorElement[] = [];

  /**
   * Stores the SchemaItem corresponding to a position in the schema
   * For example:
   *  'creation/entities' => The SchemaItem describing an entity
   *  'creation/entities/fields/' => The SchemaItem describing a field in an entity
   *  'creation/screens[type=list]/columns' => The SchemaItem describing a column of a screen when the screen type is list
   */
  mapOfJson = new Map<string, DontCodeSchemaItem>();

  constructor(protected http:HttpClient, protected updateService:ChangeUpdateService) {

  /*  this.mapOfElements.set('', this.rootListOfElements);
  this.listOfElementsStack.push(this.rootListOfElements);
    this.positionStack.push('');
    this.event
      .subscribe(textModel => {
        let position = this.currentPosition()+'/'+textModel.relativeId;
        if (textModel.id===DontCodeModel.ROOT) {
          this.positionStack.push(textModel.id);
          position = textModel.id;
        }
        if( textModel instanceof SubTextModelElement) {
          const subAction = textModel as SubTextModelElement;
          if (subAction.isStart()) {
            this.currentList().push(EditorElement.fromTextAction (textModel, position));
            this.mapOfElements.set(position, [new EditorElement(position+'/a', textModel.schemaItem, position+'/a', textModel.id, 'arrayItem' )]);

            const newList:EditorElement[]=[];
            this.listOfElementsStack.push(newList );
            this.positionStack.push(position+'/a');
            this.mapOfElements.set(this.currentPosition(), newList);
          } else {
            this.listOfElementsStack.pop();
            this.positionStack.pop();
            this.currentList().push(EditorElement.fromTextAction (textModel, this.currentPosition()));
          }
        }
        else {
          this.currentList().push(EditorElement.fromTextAction (textModel, position));
        }
      });*/
  }

/*  protected currentList (): EditorElement[] {
    if( this.listOfElementsStack.length==0)
      return null;
    return this.listOfElementsStack[this.listOfElementsStack.length-1];
  }
  protected currentPosition (): string {
    if( this.positionStack.length==0)
      return null;
    return this.positionStack[this.positionStack.length-1];
  }*/

  resetSchema () {
    this.rootElement=null;
    this.mapOfJson.clear();
/*    this.mapOfElements.clear();
    this.mapOfElements.set('', this.rootListOfElements);
    this.positionStack.length=0;
    this.listOfElementsStack.push(this.rootListOfElements);
    this.positionStack.push('');*/
    this.updateService.pushChange(new Change(ChangeType.RESET, null,null));
  }

  /**
   * Read the schema to integrate it in the list
   * @param schemaAsJson
   */
  readSchema (schemaAsJson:DontCodeSchemaItem) {
    this.jsonSchema = schemaAsJson;
    const rootSchema= AbstractSchemaItem.goto(schemaAsJson, DontCodeModel.ROOT);
    if( rootSchema) {
      this.rootElement = EditorElement.createNew(
        DontCodeModel.ROOT, DontCodeModel.ROOT,
        EditorElementType.label, rootSchema);
      this.updateService.pushChange(new Change(ChangeType.RESET, DontCodeModel.ROOT,this.rootElement));
    }
  }

  getRootElement (): EditorElement {
    return this.rootElement;
  }
}
