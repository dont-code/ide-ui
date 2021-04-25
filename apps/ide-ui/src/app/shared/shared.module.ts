import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeOfPipe } from './pipes/type-of.pipe';
import { TextModule } from './text/text.module';
import { LocalePipe } from './pipes/locale.pipe';
import { LocaleDescPipe } from './pipes/locale-desc.pipe';
import { ChangeModule } from './change/change.module';

@NgModule({
    declarations: [TypeOfPipe, LocalePipe, LocaleDescPipe],
  exports: [
    TypeOfPipe,
    LocalePipe,
    LocaleDescPipe
  ],
    imports: [
        CommonModule,
        TextModule,
      ChangeModule
    ]
})
export class SharedModule { }
