import {
  AbstractSchemaItem,
  DontCodeModelManager,
  DontCodeSchemaEnum,
  DontCodeSchemaItem,
  DontCodeSchemaProperty,
  DontCodeSchemaRef,
  dtcde
} from "@dontcode/core";


export class EditorElement {

  id: string;
  type: EditorElementType;
  /**
   * The position of this element in the hierarchy of elements
   */
  position: string;
  /**
   * The list of possible values (for a select box)
   */
  values: any[]|null=null;
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

  protected parent: EditorElement|null=null;

  /** An array of item carry the same schemamodel than the item itself, we use this to distinguish between the 2 modes
   *
   * @protected
   */
  protected asArray = false;

  constructor(id:string, schemaItem:DontCodeSchemaItem, position:string, schemaPosition:string, type:EditorElementType) {
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

  static createNew (position:string, schemaPosition:string, type:EditorElementType, schemaItem:DontCodeSchemaItem, listValues?:any[], initialValue?:any, asArray?:boolean) {
    const ret = new EditorElement(position, schemaItem, position, schemaPosition, type);
    if (listValues) {
      ret.values=listValues;
    }
    if (initialValue) {
        // Dont call setEditedValue as it would try to recalculate children
      ret.editedValue=initialValue;
    }

    if( asArray) ret.asArray=asArray;
    return ret;
  }

  getParent (): EditorElement|null {
    return this.parent;
  }

  setParent (newParent:EditorElement ) {
    this.parent = newParent;
  }

  isAsArray (): boolean {
    return this.asArray;
  }

  isHidden (): boolean {
    return DontCodeModelManager.isHidden (this.editedValue);
  }

  isReadonly (): boolean {
    return DontCodeModelManager.isReadonly (this.editedValue);
  }

  /**
   * Returns the item id of the DontCodeSchemaItem managed by this editor element if it's part of an array
   */
  getItemIdIfExists (): string|null {
    if( (this.parent) && (this.parent.type===EditorElementType.array)) {
      return this.position.substring(this.position.lastIndexOf('/') + 1);
    }
    return null;
  }

  getChildrenToDisplay (): Array<EditorElement> {
    if (this.forceRead) {
      this.childrenToDisplay.length=0;
/*      let added=false;
      if (this.type===EditorElementType.array) {
        if (this.editedValue) {
          for (const item in this.editedValue) {
            if (this.editedValue.hasOwnProperty(item)) {
              this.readSubSchema(this.position, this.schemaPosition, this.schemaModel, item, this.editedValue[item]);
              added=true;
            }
          }
        }
      }
      if(!added) {*/
        this.readSubSchema(this.position, this.schemaPosition, this.schemaModel,undefined, this.editedValue );
        if (this.schemaModel.isObject() || this.schemaModel.isArray())  // Object's value are stored in the children hierarchy, so we remove it from parent
          this.editedValue=undefined;
//      }
      this.forceRead = false;
    }
    return this.childrenToDisplay;
  }


  /**
   * Reads a DontCodeSchemaItem schema. Either is merges with current EditorElement
   * @param position
   * @param schemaPosition
   * @param model
   */
  readSubSchema ( position:string, schemaPosition:string, model:DontCodeSchemaItem, mergeStartPosition?:number, values?:any): Array<EditorElement> {
    const ret = this.childrenToDisplay;
    let mergePosition = mergeStartPosition ? mergeStartPosition : 0;
    const cache = this.allChildren;

    const parent = model;
    const children = new Array();
    let initialValue = values;

    if (this.asArray) {
        // Makes sure subItems are created from the initialValues sent, if any
        for (const itemKey in initialValue) {
          if (initialValue.hasOwnProperty(itemKey)) {
            children.push([itemKey, parent]);
          }
      }
      if (children.length === 0) {// No initial items, so create a new empty one
        children.push([this.getNextId(), parent]);
      }
    } else {
      // Make sure all subproperties are considered
        for (const childModel of parent.getChildren()) {
          const propKey = childModel[0];
          children.push([propKey, childModel[1]]);
        }
    }

        // resolve schemareference of all children
    children.forEach(value => {
      if (value[1] instanceof DontCodeSchemaRef) {
        if( !value[1].isArray() || parent === value[1]) // Only resolve ref if we are not creating the array element
          value[1]=this.resolveRefs(value[1]);
      }
    });

    for (const [propName, child] of children) {
      let childPosition = position;
      let schemaChildPosition = schemaPosition;
      initialValue = values;
        // Are we reading a subProperty ?
      if (propName && propName.length>0) {
        childPosition = childPosition + '/' + propName;
        if( !this.asArray)
          schemaChildPosition = schemaChildPosition + '/'+ propName;
        if( initialValue)
          initialValue = initialValue[propName];
      }

      let newElement:EditorElement|undefined = cache.get(propName);
      if (!newElement) {
        if (child.isArray() && (child!==parent) ) {
          // A model can be an array and an object or value at the same time.
          newElement = EditorElement.createNew(
            childPosition, schemaChildPosition, EditorElementType.array, child, undefined, initialValue, true);
        } else if (child.isValue()) {
          newElement = EditorElement.createNew(
            childPosition, schemaChildPosition, EditorElementType.input, child, undefined, initialValue);
        } else if (child.isEnum()) {
          const asEnum = child as DontCodeSchemaEnum;
          newElement = EditorElement.createNew(
            childPosition, schemaChildPosition, EditorElementType.list, child, asEnum.getValues(), initialValue);
        } else if (child.isObject()) {
          newElement = EditorElement.createNew(
            childPosition, schemaChildPosition, EditorElementType.object, child, undefined, initialValue, false);
        } /*else if (child.isReference()) {
          this.readSubSchema(childPosition, schemaChildPosition, child, true, mergePosition, initialValue);
        }*/ else {
          console.error('Unknown item read from schema at position ' + position + ':', child);
        }
      } else if (initialValue!==undefined) {
        newElement.setEditedValue(initialValue);
      }

      if (newElement) {
        newElement.parent=this;
        mergePosition = this.mergeElement(newElement, child, propName,mergePosition);
        if (newElement.hasActiveProperties()) {
          const toAddProps = newElement.getActiveProperties();
          if (toAddProps) {
              // We have to add a dynamic property, so let's create it with a possible value
            let propValue = toAddProps.getRelativeId();
            if ((values!=null)&&(propValue!=null)) {
              propValue = values[propValue];
            }else
              propValue=undefined;
            this.readSubSchema(position, schemaPosition, toAddProps, mergePosition, values);
            // if the active properties are replacing the remaining elements, then remove the remaining elements and  just stop the loop here
            if (newElement.isReplacementActive()) {
              break;
            }
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
      const found= AbstractSchemaItem.goto(this.calculateRootSchema(),toFind);
      if (found) ret=found;
    }
    return ret;
  }

  calculateRootSchema (): DontCodeSchemaItem {
    let ret:DontCodeSchemaItem = this.schemaModel;
    while (ret.getParent()) {
      const parent =ret.getParent();
      if (parent) ret = parent;
    }
    return ret;
  }

  getNextId() {
    const childrenKeys = new Set<string>(this.allChildren.keys());
    return DontCodeModelManager.generateNextKey(childrenKeys);
  }

  /**
   * Creates a new sub element of an array. Usually called when the user clicks Add
   * @param element
   */
  addSubElement() {
    /**
     * Creates the new element and adds it to the list
     */
    this.readSubSchema(this.position, this.schemaPosition, this.schemaModel);
  }

  removeElement( item:EditorElement, index?:number): EditorElement {
    const parentList = this.getChildrenToDisplay();
    if( !index){
      index = parentList.indexOf(item);
    }
    const ret = parentList.splice(index,1)[0];
    return ret;
  }

  /**
   * Moves the item up one place and returns the immediate following item.
   * or returns null if nothing have been moved
   * @param item
   * @param index
   */
  upElement( item: EditorElement, index: number): EditorElement|null {
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
  downElement(item: EditorElement, index: number): EditorElement|null|undefined {
    const parentList = this.getChildrenToDisplay();
    if( !index){
      index = parentList.indexOf(item);
    }
    if (index<parentList.length-1) {
      parentList.splice(index, 1);
      parentList.splice(index+1,0,item);
    } else {
      return null;
    }

    if ((index+1) === parentList.length-1) {
      // Item becomes the last element, so no-one is after him
      return undefined;
    } else
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
      if( this.parent)
        this.parent.forceRead=true;
      return true;
    } else if ((this.schemaModel.isArray()) || (this.schemaModel.isObject())) {
        // Remove all array items that are no more in values
      for (const oldProp of this.allChildren.keys()) {
        if( (!this.editedValue) || (this.editedValue[oldProp]===undefined)) {
          this.allChildren.delete(oldProp);
        }
      }
      this.forceRead=true;
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

  protected getActiveProperties(): DontCodeSchemaProperty|undefined {
    return this.schemaModel.getProperties(this.editedValue);
  }

  protected isReplacementActive(): boolean {
    const props = this.schemaModel.getProperties(this.editedValue);
    if (props && props.isReplace())
      return true;
    else
      return false;
  }

  protected mergeElement(newElement: EditorElement, after:DontCodeSchemaItem, propName:string, mergeStartPosition: number): number {
    const list= this.childrenToDisplay;
    const cache = this.allChildren;
    const key = propName??newElement.schemaModel.getRelativeId();
    // If the element was already present, do nothing
    if (cache.get(key)===newElement) {
      // Returns its position
      for (let i=0;i<list.length;i++) {
        if (list[i]===newElement)
          return i;
      }
    } else if (cache.get(key)!=null) {
      console.error ('Setting 2 differents elements with the same property name: '+key+' for the element '+this.position);
      throw new Error ('Setting 2 differents elements with the same property name: '+key+' for the element '+this.position);
    }

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

  getChild (propName:string) {
    if (this.forceRead)
      this.getChildrenToDisplay();
    return this.allChildren.get(propName);
  }

  /**
   * Retrieve the child in the hierarchy at the specified subposition.
   * For example getChildInHierarchy ('sub/item/name') will return the name of the item who is child of sub child of the element
   * getChildInHierarchy ('sub/table/ab/type') will return the type of the element ab of the array named table of sub child
   * @param beforeAName
   */
  getChildInHierarchy(beforeAName: string): EditorElement|null {
    const propNames=beforeAName.split('/');
    let current:EditorElement|undefined = this;
    //let nextIsArray= false;
    //let arrayProp:string=null;
    for (const propName of propNames) {
      if( propName!=="") {
        /*if( nextIsArray) {
          current = this.getChildrenToDisplay().find(value => {
            if (value.position.endsWith(arrayProp+'/'+propName))
              return true;
          });
          arrayProp=null;
          nextIsArray=false;
        } else if( this.schemaModel.getChild(propName)?.isArray()) {
          nextIsArray=true;
          arrayProp = propName;
        } else {*/
        current = current.getChild(propName);
   //     }
        if(!current) {
          return null;
        }
      }
    }
    return current;
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
enum ArrayAction {
  DEFAULT,
  NEW_ITEM=1,
  ONLY_ITEM
}
