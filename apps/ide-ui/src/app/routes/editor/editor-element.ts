import { ModelAction } from '../../shared/model/model-action';

export class EditorElement {
  type: string;
  value: string;
  values: string[];

  constructor(public id:string) {
  }

  static fromModelAction(action: ModelAction) {
    let ret = new EditorElement(action.id);
    if (action.isText()) {
      ret.type='string';
      ret.value=action.textValue;
    }else if (action.isArray()){
      ret.type='array';
      ret.values=action.values;
    } else if (action.isInput()) {
      ret.type='input';
    } else if (action.isNewline()) {
      ret.type='newLine';
    }
    return ret;
  }
}
