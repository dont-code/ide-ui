import { TextModelElement } from './text-model-element';
import { DontCodeSchemaItem } from '@dontcode/core';

export class SubTextModelElement extends TextModelElement {
  static readonly MULTIPLE: 'multiple';
  static readonly SINGLE: 'single';

  static readonly START = true;
  static readonly END = false;

  multiple: boolean;
  startOrEnd: boolean;

  constructor(id: string, schemaItem:DontCodeSchemaItem, type:string, startOrEnd:boolean) {
    super(id, schemaItem);

    this.type = 'object';
    this.multiple = (type===SubTextModelElement.MULTIPLE);
    this.startOrEnd = startOrEnd;
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

