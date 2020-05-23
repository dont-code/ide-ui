import { Injectable } from "@angular/core";
import {
  Change,
  ChangeType,
  DontCodeModel,
  DontCodeSchemaEnum,
  DontCodeSchemaItem,
  DontCodeSchemaRef
} from "@dontcode/core";
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

  rootListOfElements:EditorElement[] = [];

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
    const rootSchema= this.goto(schemaAsJson, DontCodeModel.ROOT);
    if( rootSchema) {
      this.rootElement = EditorElement.createNew(
        DontCodeModel.ROOT, DontCodeModel.ROOT,
        EditorElementType.label, rootSchema);
      this.readSubSchema (rootSchema, this.rootElement, DontCodeModel.ROOT, DontCodeModel.ROOT);
    }
  }

  readSubSchema (parent: DontCodeSchemaItem, parentElement:EditorElement, position:string, schemaPosition:string) {
    this.mapOfJson.set (schemaPosition, parent);
    //this.mapOfElements.set(position, parentElement.getChildrenToDisplay());
      // Transparently resolves references
    if( parent instanceof DontCodeSchemaRef) {
      (parent as DontCodeSchemaRef).resolveReference(this.resolveRefs(parent));
    }
    for (const [key, value] of parent.getChildren()) {
      let childPosition = position;
      let schemaChildPosition = schemaPosition;
      if (key && key.length>0) {
        childPosition = childPosition + '/' + key;
        schemaChildPosition = schemaChildPosition + '/'+ key;
      }
      let newElement:EditorElement;
      if( value.isArray()) {
        newElement = EditorElement.createNew(
          childPosition, schemaChildPosition, EditorElementType.array, value)
        parentElement.addToDisplayChildren (newElement);
          // We create the first element of the array
        childPosition=childPosition+'/a';
        this.readSubSchema(value, newElement, childPosition, schemaChildPosition);
      } else if (value.isValue()) {
        parentElement.addToDisplayChildren(EditorElement.createNew(
          childPosition, schemaChildPosition, EditorElementType.input, value)
        );
      } else if (value.isEnum()) {
        const asEnum = value as DontCodeSchemaEnum;
        parentElement.addToDisplayChildren(EditorElement.createNew(
          childPosition, schemaChildPosition, EditorElementType.list, value, asEnum.getValues())
        );
      } else if( value.isObject()) {
        newElement = EditorElement.createNew(
          childPosition, schemaChildPosition, EditorElementType.object, value);
        parentElement.addToDisplayChildren(newElement);

        this.readSubSchema(value,newElement, childPosition, schemaChildPosition);
      } else if (value.isReference()) {
        this.readSubSchema(value, parentElement,childPosition,schemaChildPosition);
      }
      else {
        console.error ('Unknown item read from schema at position '+position+':', value);
      }
    }
  }

  goto (entity: DontCodeSchemaItem, to:string): DontCodeSchemaItem {
    let ret = entity;
    to.split('/').forEach(value => {
      if( value!=='#' && (value!='')) {
        ret=ret.getChild(value);
      }
      if( !ret) {
        console.error('Cannot find '+value+' of '+to+' in the following item ', entity);
      }
    });
    return ret;
  }

  resolveRefs (entity: DontCodeSchemaItem): DontCodeSchemaItem {
    let ret = entity;
    if( entity.isReference()) {
      let toFind = (entity as DontCodeSchemaRef).getReference();
      ret = this.goto(this.jsonSchema,toFind);
    }
    return ret;
  }

  /*getList(fromId?:string) : EditorElement[] {
    if (!fromId)
      fromId='';
    return this.mapOfElements.get(fromId);
  }*/

  getNextId(element:EditorElement) {
    const list = element.getChildrenToDisplay();
    const position = element.position;
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

  /**
   * Creates a new sub element of an array. Usually called when the user clicks Add
   * @param element
   */
  addSubElement(element: EditorElement) {
    /**
     * Creates the new element and adds it to the list
     */
    //const list = this.getList(element.position);
    const subSchema = this.mapOfJson.get(element.schemaPosition);
    const nextId = this.getNextId (element);
    const duplicateElement = EditorElement.createNew(
      element.position+'/'+nextId, element.schemaPosition, element.type, subSchema );

  //  list.push (duplicateElement);
    element.addToDisplayChildren(duplicateElement);

    /**
     * Now re-read the schema to duplicate the new element
    */
/*    const newList:EditorElement[]=[];
    this.listOfElementsStack.length=0;
    this.positionStack.length=0;
    this.listOfElementsStack.push(newList );
    this.positionStack.push(element.position+'/'+nextId);*/
//    this.mapOfElements.set(duplicateElement.position, duplicateElement.getChildrenToDisplay());

    this.readSubSchema(subSchema, duplicateElement, element.position+'/'+nextId,element.schemaPosition);
  }

  removeElement(parent: EditorElement, item:EditorElement, index?:number) {
    let parentList = parent.getChildrenToDisplay();
    if( !index){
      index = parentList.indexOf(item);
    }
    parentList.splice(index,1);
  }

  upElement(parent: EditorElement, item: EditorElement, index: number) {
    let parentList = parent.getChildrenToDisplay();
    if( !index){
      index = parentList.indexOf(item);
    }

    if (index>0) {
      parentList.splice(index, 1);
      parentList.splice(index-1,0,item);
    }
  }

  downElement(parent: EditorElement, item: EditorElement, index: number) {
    let parentList = parent.getChildrenToDisplay();
    if( !index){
      index = parentList.indexOf(item);
    }
    if (index<parentList.length-1) {
      parentList.splice(index, 1);
      parentList.splice(index+1,0,item);
    }

  }

  /**
   * A value has changed in the element, that may triggers change in the editor
   * like for example, when selecting a item in a list change the items below
   * @param parent
   * @param item
   * @param index
   */
  refreshElement (parent: EditorElement, item:EditorElement, index:number, value:any) {
    const schema:DontCodeSchemaItem = this.mapOfJson.get(item.schemaPosition);
    const props = schema.getProperties(value);
    if (props) {
  //  *  'creation/screens[type=list]/columns' => The SchemaItem describing a column of a screen when the screen type is list

    }
  }

  getRootElement (): EditorElement {
    return this.rootElement;
  }
}
