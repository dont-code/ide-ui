import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeOfPipe } from './pipes/type-of.pipe';
import { ModelModule } from './model/model/model.module';



@NgModule({
    declarations: [TypeOfPipe],
    exports: [
        TypeOfPipe
    ],
    imports: [
        CommonModule,
        ModelModule
    ]
})
export class SharedModule { }
