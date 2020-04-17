import { Injectable } from '@angular/core';
import { EditorModule } from './editor.module';

@Injectable({
  providedIn: 'root'
})
export class MarginService {

  protected margin: number
  constructor() { }

  reset () {
    this.margin=0;
  }

  increment () {
    this.margin+=50;
  }

  decrement () {
    this.margin-=50;
  }

  change (add:boolean) {
    if (add) this.increment();
    else this.decrement();
  }

  value (): number {
    return this.margin;
  }
}
