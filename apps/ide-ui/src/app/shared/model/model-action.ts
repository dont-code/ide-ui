export class ModelAction {
  protected type: string;
  id: string;
  textValue: string;
  values: string[]

  constructor (id: string, ...text:string[]) {
    this.id=id;
    if (text.length==1){
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
}
