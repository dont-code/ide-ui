import { TextAction } from '../../shared/text/text-action';
import { SubTextAction } from '../../shared/text/sub-text-action';

export class EditorElement {
  type: string;
  value: string;
  values: string[];

  constructor(public id:string) {
  }

  static fromTextAction(action: TextAction) {
    let ret = new EditorElement(action.id);
    if (action.isText()) {
      ret.type='string';
      ret.value=action.textValue;
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
        ret.value = subAction.textValue;
    }
    return ret;
  }
}
