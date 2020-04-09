import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeOf'
})
export class TypeOfPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (Array.isArray(value))
      return 'array';
    else
      return typeof value;
  }

}
