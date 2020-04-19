import { TextAction } from '../../shared/text/text-action';
import { SubTextAction } from '../../shared/text/sub-text-action';

export class EditorElement {
  id: string;
  type: string;
  position: string;
  schemaPosition: string;
  values: string[];

  constructor(id:string, position?:string, schemaPosition?:string) {
    this.id = id;
    this.position=position;
    this.schemaPosition=schemaPosition;

    if( this.id)
      this.id=this.id.split('/').join('-');
  }

  static fromTextAction(action: TextAction, position: string) {
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
    } else if(action instanceof SubTextAction) {
        const subAction = action as SubTextAction;
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
