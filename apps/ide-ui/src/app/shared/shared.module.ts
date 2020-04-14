import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeOfPipe } from './pipes/type-of.pipe';
import { TextModule } from './text/text.module';
import { ModelModule } from './model/model.module';



@NgModule({
    declarations: [TypeOfPipe],
    exports: [
        TypeOfPipe
    ],
    imports: [
        CommonModule,
        TextModule,
        ModelModule
    ]
})
export class SharedModule { }
