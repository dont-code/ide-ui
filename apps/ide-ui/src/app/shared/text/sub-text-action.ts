import { TextAction } from './text-action';

export class SubTextAction extends TextAction {
  static readonly MULTIPLE: 'multiple';
  static readonly SINGLE: 'single';

  static readonly START = true;
  static readonly END = false;

  multiple: boolean;
  startOrEnd: boolean;

  constructor(id: string, text:string, type:string, startOrEnd:boolean) {
    super(id);
    this.type = 'object';
    this.multiple = (type===SubTextAction.MULTIPLE);
    this.startOrEnd = startOrEnd;
    this.textValue = text;
  }

  isObject(): boolean {
    return this.type==='object';
  }

  isMultiple (): boolean {
    return this.multiple;
  }

  isStart (): boolean {
    return this.startOrEnd;
  }

  isEnd (): boolean {
    return !this.startOrEnd;
  }

}

