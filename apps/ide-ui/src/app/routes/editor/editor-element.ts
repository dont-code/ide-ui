import { TextAction } from '../../shared/text/text-action';

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
