import { DontCodeSchemaItem } from '@dontcode/core';

export class TextModelElement {
  type: string;
  id: string;
  relativeId:string;
  values: string[];
  schemaItem:DontCodeSchemaItem;

  constructor (id: string, schemaItem:DontCodeSchemaItem, ...text:string[]) {
    this.id=id;
    this.schemaItem = schemaItem;
    if( id.lastIndexOf('/')==-1) {
      this.relativeId = id;
    }else {
      this.relativeId=id.substring(id.lastIndexOf('/')+1);
    }
    if( text.length == 0) {
      if (this.id==null) {
        this.type='newline';
      }else {
        this.type='input';
      }
    } else if (text.length==1){
      this.type='text';
      }else {
        this.type='array';
        this.values=text;
      }

  }
  isText (): boolean {
    return this.type==='text';
  }
  isArray (): boolean {
    return this.type==='array';
  }
  isNewline (): boolean {
    return this.type==='newline';
  }
  isInput (): boolean {
    return this.type==='input';
  }
}
