import { DontCodeSchemaEnum, DontCodeSchemaItem, DontCodeSchemaRef, AbstractSchemaItem } from "@dontcode/core";

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
  values: string[];
  /**
   * The position of this element in the DontCode schema
   */
  schemaPosition: string;
  /**
   * The Schema model item represented by this element
   */
  schemaModel: DontCodeSchemaItem;

  editedValue: any;

  protected childrenToDisplay = new Array<EditorElement>();
  protected forceRead = true;

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

  /**
   * Returns the element's position as parent position and child id
   */
  splitPosition (): [string,string] {
    const last=this.position.lastIndexOf('/');
    return [this.position.substring(0, last), this.position.substring(last+1)];
  }

  static createNew (position:string, schemaPosition:string, type:EditorElementType, schemaItem:DontCodeSchemaItem, values?:string[]) {
    let ret = new EditorElement(position, schemaItem, position, schemaPosition, type);
    if (values) {
      ret.values=values;
    }
    return ret;
  }

  getChildrenToDisplay (): Array<EditorElement> {
    if (this.forceRead) {
      let toAdd:Array<EditorElement>;
      if( this.type===EditorElementType.array) {
        toAdd = this.readSubSchema(this.position+'/a', this.schemaPosition, this.schemaModel);
      } else {
        toAdd = this.readSubSchema(this.position, this.schemaPosition, this.schemaModel);
      }
      this.addToDisplayChildren(toAdd);
      this.forceRead = false;
    }
    return this.childrenToDisplay;
  }

  addToDisplayChildren(editorElement: EditorElement[]) {
    editorElement.forEach(value => {
      this.childrenToDisplay.push(value);
    })
  }

  readSubSchema ( position:string, schemaPosition:string, model:DontCodeSchemaItem): Array<EditorElement> {
    let ret = new Array<EditorElement>();
    const parent = model;
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
          childPosition, schemaChildPosition, EditorElementType.array, value);
//        this.addToDisplayChildren (newElement);
      } else if (value.isValue()) {
        newElement = EditorElement.createNew(
          childPosition, schemaChildPosition, EditorElementType.input, value);
//        this.addToDisplayChildren(newElement);
      } else if (value.isEnum()) {
        const asEnum = value as DontCodeSchemaEnum;
        newElement = EditorElement.createNew(
          childPosition, schemaChildPosition, EditorElementType.list, value, asEnum.getValues());
//        this.addToDisplayChildren(newElement);
      } else if( value.isObject()) {
        newElement = EditorElement.createNew(
          childPosition, schemaChildPosition, EditorElementType.object, value);
//        this.addToDisplayChildren(newElement);
      } else if (value.isReference()) {
        ret = this.readSubSchema(childPosition,schemaChildPosition, value);
      }
      else {
        console.error ('Unknown item read from schema at position '+position+':', value);
      }
      if( newElement)
        ret.push(newElement);
    }
    return ret;
  }

  resolveRefs (entity: DontCodeSchemaItem): DontCodeSchemaItem {
    let ret = entity;
    if( entity.isReference()) {
      let toFind = (entity as DontCodeSchemaRef).getReference();
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
    const duplicateElement = this.readSubSchema(
      this.position+'/'+nextId, this.schemaPosition, subSchema );

    //  list.push (duplicateElement);
    this.addToDisplayChildren(duplicateElement);

  }

  removeElement( item:EditorElement, index?:number) {
    let parentList = this.getChildrenToDisplay();
    if( !index){
      index = parentList.indexOf(item);
    }
    parentList.splice(index,1);
  }

  upElement( item: EditorElement, index: number) {
    let parentList = this.getChildrenToDisplay();
    if( !index){
      index = parentList.indexOf(item);
    }

    if (index>0) {
      parentList.splice(index, 1);
      parentList.splice(index-1,0,item);
    }
  }

  downElement(item: EditorElement, index: number) {
    let parentList = this.getChildrenToDisplay();
    if( !index){
      index = parentList.indexOf(item);
    }
    if (index<parentList.length-1) {
      parentList.splice(index, 1);
      parentList.splice(index+1,0,item);
    }

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
