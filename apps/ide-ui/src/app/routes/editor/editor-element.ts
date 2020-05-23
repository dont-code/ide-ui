import { DontCodeSchemaItem } from "@dontcode/core";

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
  /*static fromTextAction(textModel: TextModelElement, position: string) {
    let ret = new EditorElement(position, textModel.schemaItem);
    ret.position = position;
    ret.schemaPosition=textModel.id;
    if (textModel.isText()) {
      ret.type='string';
    }else if (textModel.isArray()){
      ret.type='list';
      ret.values=textModel.values;
    } else if (textModel.isInput()) {
      ret.type='input';
    } else if (textModel.isNewline()) {
      ret.type='newLine';
    } else if(textModel instanceof SubTextModelElement) {
        const subAction = textModel as SubTextModelElement;
        if (subAction.isMultiple()) {
          ret.type='array';
        }else
        {
          ret.type = 'object';
        }
        if( subAction.isStart())
          ret.type=ret.type+'-start';
        else
          ret.type=ret.type+'-end';
    }
    return ret;
  }*/

  getChildrenToDisplay (): Array<EditorElement> {
    return this.childrenToDisplay;
  }

  addToDisplayChildren(editorElement: EditorElement) {
    this.childrenToDisplay.push(editorElement);
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
