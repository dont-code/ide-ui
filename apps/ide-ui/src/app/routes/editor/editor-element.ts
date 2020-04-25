import { TextModelElement } from '../../shared/text/text-model-element';
import { SubTextModelElement } from '../../shared/text/sub-text-model-element';

export class EditorElement {
  id: string;
  type: string;
  position: string;
  schemaPosition: string;
  values: string[];

  constructor(id:string, position?:string, schemaPosition?:string, type?:string) {
    this.id = id;
    this.position=position;
    this.schemaPosition=schemaPosition;

    if( this.id)
      this.id=this.id.split('/').join('-');
    this.type=type;
  }

  static fromTextAction(action: TextModelElement, position: string) {
    let ret = new EditorElement(position);
    ret.position = position;
    ret.schemaPosition=action.id;
    if (action.isText()) {
      ret.type='string';
    }else if (action.isArray()){
      ret.type='list';
      ret.values=action.values;
    } else if (action.isInput()) {
      ret.type='input';
    } else if (action.isNewline()) {
      ret.type='newLine';
    } else if(action instanceof SubTextModelElement) {
        const subAction = action as SubTextModelElement;
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
  }
}
