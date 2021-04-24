import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeOfPipe } from './pipes/type-of.pipe';
import { TextModule } from './text/text.module';
import { LocalePipe } from './pipes/locale.pipe';
import { LocaleDescPipe } from './pipes/locale-desc.pipe';
import { ChangeModule } from './change/change.module';
import {IdeComponent} from "./ui/IdeComponent";

@NgModule({
    declarations: [TypeOfPipe, LocalePipe, LocaleDescPipe, IdeComponent],
  exports: [
    TypeOfPipe,
    LocalePipe,
    LocaleDescPipe,
    IdeComponent
  ],
    imports: [
        CommonModule,
        TextModule,
      ChangeModule
    ]
})
export class SharedModule { }
