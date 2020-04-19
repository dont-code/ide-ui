import { Pipe, PipeTransform } from '@angular/core';
import { LocaleService } from '../text/services/locale.service';

@Pipe({
  name: 'localeDesc'
})
export class LocaleDescPipe implements PipeTransform {

  constructor(protected locale:LocaleService) {
  }

  transform(value: string, ...args: unknown[]): unknown {
    return this.locale.toText(value+'-desc');
  }
}
