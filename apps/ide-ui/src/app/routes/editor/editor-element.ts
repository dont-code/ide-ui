import {
  AbstractSchemaItem,
  DontCodeSchemaEnum,
  DontCodeSchemaItem,
  DontCodeSchemaProperty,
  DontCodeSchemaRef
} from "@dontcode/core";

export class EditorElement {

  constructor(id:string, schemaItem:DontCodeSchemaItem, position?:string, schemaPosition?:string, type?:EditorElementType) {
    this.id = id;
    this.schemaModel = schemaItem;
    this.position=position;
    this.schemaPosition=schemaPosition;

    /**
     * The id may not contains / as it is forbidden by html
     */
    if( this.id)
      this.id=this.id.split('/').join('-');
    this.type=type;
  }
  id: string;
  type: EditorElementType;
  /**
   * The position of this element in the hierarchy of elements
   */
  position: string;
  /**
   * The list of possible values (for a select box)
   */
  values: string[];
  /**
   * The position of this element in the DontCode schema
   */
  schemaPosition: string;
  /**
   * The Schema model item represented by this element
   */
  schemaModel: DontCodeSchemaItem;

  protected editedValue: any;

  protected childrenToDisplay = new Array<EditorElement>();
  protected allChildren = new Map<string, EditorElement> ();
  protected forceRead = true;

  protected parent: EditorElement;

  static createNew (position:string, schemaPosition:string, type:EditorElementType, schemaItem:DontCodeSchemaItem, values?:string[]) {
    const ret = new EditorElement(position, schemaItem, position, schemaPosition, type);
    if (values) {
      ret.values=values;
    }
    return ret;
  }

  getParent (): EditorElement {
    return this.parent;
  }

  setParent (newParent:EditorElement ) {
    this.parent = newParent;
  }

  /**
   * Returns the item id of the DontCodeSchemaItem managed by this editor element if it's part of an array
   */
  getItemIdIfExists (): string {
    if( (this.parent) && (this.parent.type===EditorElementType.array)) {
      return this.position.substring(this.position.lastIndexOf('/') + 1);
    }
    return null;
  }

  getChildrenToDisplay (): Array<EditorElement> {
    if (this.forceRead) {
      this.childrenToDisplay.length=0;
      const nextId = (this.type===EditorElementType.array)?'a':null;
      this.readSubSchema(this.position, this.schemaPosition, this.schemaModel, nextId );
      this.forceRead = false;
    }
    return this.childrenToDisplay;
  }

/*  addToDisplayChildren(editorElement: EditorElement[]) {
    editorElement.forEach(value => {
      value.setParent(this);
      this.childrenToDisplay.push(value);
    })
  }
*/

  /**
   * Inserts or replace the properties right after the position of the given element
   * @param afterElement
   * @param childId
   * @param update
   */
/*  mergeDisplayChildren (afterElement:EditorElement, update:DontCodeSchemaProperty) {

    const newProps = this.readSubSchema(this.position+'/'+update.getRelativeId(), this.schemaPosition+'/'+update.getRelativeId(),
      update, null);
    for (let i = 0; i< this.childrenToDisplay.length;i++) {
      if (this.childrenToDisplay[i]===afterElement) {
        if (update.isReplace()) {
          this.childrenToDisplay.splice(i+1, this.childrenToDisplay.length-i, ...newProps);
        }else {
          this.childrenToDisplay.splice(i+1, 0, ...newProps);
        }
        break;
      }
    }
  }
*/
  /**
   * Finds where in the children to display list we should insert an element of the given propertyName or schemaItem
   * @param childId
   * @param schemaItem
   */
/*  findInsertionPointOf (childId: string, schemaItem?:DontCodeSchemaItem) {
    let targetSchema = schemaItem || this.schemaModel.getChild(childId);
    const targetSchemaPosition = this.schemaModel.getChildIndex (targetSchema);
    let targetIndex = -1;
    this.childrenToDisplay.forEach((value, index) => {
      if (this.schemaModel.getChildIndex(value.schemaModel) <= targetSchemaPosition) {
        targetIndex=index;
      }
    });
    return targetIndex++;
  }*/

  /**
   * Reads a DontCodeSchemaItem schema. Either is merges with current EditorElement, or it uses the provided toMerge and elementCache without touching the current EditorElement
   * @param position
   * @param schemaPosition
   * @param model
   * @param toMerge
   * @param elementCache
   */
  readSubSchema ( position:string, schemaPosition:string, model:DontCodeSchemaItem, nextArrayId:string, toMerge?:Array<EditorElement>, mergeStartPosition?:number, elementCache?:Map<string, EditorElement>): Array<EditorElement> {
    const ret = /*toMerge ? toMerge :*/ this.childrenToDisplay;
    let mergePosition = mergeStartPosition ? mergeStartPosition : 0;
    const cache = /*elementCache ? elementCache :*/ this.allChildren;

    const parent = model;

    let children = parent.getChildren();

    if (nextArrayId)  {
      // We are managing subelements of an array
      children = new Map([['', parent]]).entries();
      position = position + '/'+ nextArrayId;
    }
    // Transparently resolves references
    if( parent instanceof DontCodeSchemaRef) {
      // We are emulating referenced elements as children of the ref
      children = new Map([['', this.resolveRefs(parent)]]).entries();
    }

    for (const [key, value] of children) {
      let childPosition = position;
      let schemaChildPosition = schemaPosition;
      if (key && key.length>0) {
        childPosition = childPosition + '/' + key;
        schemaChildPosition = schemaChildPosition + '/'+ key;
      }

      let newElement:EditorElement = cache.get(key);
      if (!newElement) {
        if (value.isArray() ) {
          if(!nextArrayId) {
          // An model can be an array and an object or value at the same time.
            newElement = EditorElement.createNew(
              childPosition, schemaChildPosition, EditorElementType.array, value);
          }
        }
        if( !newElement) {
          if (value.isValue()) {
            newElement = EditorElement.createNew(
              childPosition, schemaChildPosition, EditorElementType.input, value);
          } else if (value.isEnum()) {
            const asEnum = value as DontCodeSchemaEnum;
            newElement = EditorElement.createNew(
              childPosition, schemaChildPosition, EditorElementType.list, value, asEnum.getValues());
          } else if (value.isObject()) {
            newElement = EditorElement.createNew(
              childPosition, schemaChildPosition, EditorElementType.object, value);
          } else if (value.isReference()) {
            this.readSubSchema(childPosition, schemaChildPosition, value, null, ret, mergePosition, cache);
          } else {
            console.error('Unknown item read from schema at position ' + position + ':', value);
          }
        }
      }

      if (newElement) {
        newElement.parent=this;
        mergePosition = this.mergeElement(newElement, value, mergePosition, null, null);
        if (newElement.hasActiveProperties()) {
          const toAddProps = newElement.getActiveProperties();
          this.readSubSchema(position, schemaPosition, toAddProps, null,null, mergePosition, null);
          // if the active properties are replacing the remaining elements, then remove the remaining elements and  just stop the loop here
          if (newElement.isReplacementActive()) {
            break;
          }
        }
      }
    }
    return ret;
  }

  resolveRefs (entity: DontCodeSchemaItem): DontCodeSchemaItem {
    let ret = entity;
    if( entity.isReference()) {
      const toFind = (entity as DontCodeSchemaRef).getReference();
      ret = AbstractSchemaItem.goto(this.calculateRootSchema(),toFind);
    }
    return ret;
  }

  calculateRootSchema () {
    let ret:DontCodeSchemaItem = this.schemaModel;
    while (ret.getParent()) {
      ret=ret.getParent();
    }
    return ret;
  }

  getNextId() {
    const list = this.getChildrenToDisplay();
    const position = this.position;
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
  addSubElement() {
    /**
     * Creates the new element and adds it to the list
     */
      //const list = this.getList(element.position);
    const subSchema = this.schemaModel;
    const nextId = this.getNextId ();
    this.readSubSchema(this.position, this.schemaPosition, subSchema, nextId);
  }

  removeElement( item:EditorElement, index?:number): EditorElement {
    const parentList = this.getChildrenToDisplay();
    if( !index){
      index = parentList.indexOf(item);
    }
    let ret = parentList.splice(index,1)[0];
    return ret;
  }

  /**
   * Moves the item up one place and returns the immediate following item.
   * or returns null if nothing have been moved
   * @param item
   * @param index
   */
  upElement( item: EditorElement, index: number): EditorElement {
    const parentList = this.getChildrenToDisplay();
    if( !index){
      index = parentList.indexOf(item);
    }

    if (index>0) {
      parentList.splice(index, 1);
      parentList.splice(index-1,0,item);
    } else {
      return null;
    }

    return parentList[index];
  }

  /**
   * Moves the item down and returns the next item if possible.
   * Returns null if the item was already the last element (no move possible)
   * or undefined if the moved item becomes the last element
   * @param item
   * @param index
   */
  downElement(item: EditorElement, index: number): EditorElement {
    const parentList = this.getChildrenToDisplay();
    if( !index){
      index = parentList.indexOf(item);
    }
    if (index<parentList.length-1) {
      parentList.splice(index, 1);
      parentList.splice(index+1,0,item);
    } else if (index == parentList.length-1) {
        // Item becomes the last element, so no-one is after him
      return undefined;
    } else {
      return null;
    }

    return parentList[index+2];
  }

  getEditedValue (): any {
    return this.editedValue;
  }

  setEditedValue (newVal:any): boolean {
    const oldValue = this.editedValue;
    this.editedValue = newVal;
    const props = this.schemaModel.getProperties(this.editedValue);
    if (props || (oldValue && (this.schemaModel.getProperties(oldValue)))) {
      // The children properties have changed
      //this.parent.mergeDisplayChildren(this, props);
      this.parent.forceRead=true;
      return true;
    }
    return false;
  }

  protected hasActiveProperties(): boolean {
    const props = this.schemaModel.getProperties(this.editedValue);
    if (props)
      return true;
    else
      return false;
  }

  protected getActiveProperties(): DontCodeSchemaProperty {
    return this.schemaModel.getProperties(this.editedValue);
  }

  protected isReplacementActive(): boolean {
    const props = this.schemaModel.getProperties(this.editedValue);
    if (props && props.isReplace())
      return true;
    else
      return false;
  }

  protected mergeElement(newElement: EditorElement, after:DontCodeSchemaItem, mergeStartPosition: number, toMerge?: Array<EditorElement>, elementCache?: Map<string, EditorElement>): number {
    const list= /*toMerge?toMerge:*/this.childrenToDisplay;
    const cache = /*elementCache?elementCache:*/this.allChildren;
    const key = newElement.schemaModel.getRelativeId();
    cache.set(key, newElement);
    if (mergeStartPosition>=list.length){
      list.push(newElement);
      return ++mergeStartPosition;
    }

    let foundAt=-1;
    let alreadyThere=false;
    for (let i=mergeStartPosition;i<list.length;i++) {
      if (list[i].schemaModel===after) {
        foundAt=i;
      } else {
        if (foundAt !== -1) {
          // We found the insertion point, should we delete older elements or is the element already present in the list ?
          if (list[i]===newElement) {
            // It was already in the list !
            alreadyThere = true;
          }
          break;
        }
      }
    }

    if (foundAt !== -1)
      mergeStartPosition=foundAt+1;

    if(!alreadyThere)
      list.splice(mergeStartPosition, 0, newElement);
    return mergeStartPosition;
  }
}

export enum EditorElementType {
  array='array',
  object='object',
  newLine='newLine',
  input='input',
  list='list',
  label='label'
}
