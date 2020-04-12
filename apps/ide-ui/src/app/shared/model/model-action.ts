export class ModelAction {
  protected type: string;
  id: string;
  textValue: string;
  values: string[]

  constructor (id: string, ...text:string[]) {
    this.id=id;
    if( text.length == 0) {
      if (this.id==null) {
        this.type='newline';
      }else {
        this.type='input';
      }
    } else if (text.length==1){
      this.type='text';
      this.textValue = text[0];
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
