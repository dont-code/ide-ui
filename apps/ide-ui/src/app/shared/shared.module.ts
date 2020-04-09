import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeOfPipe } from './pipes/type-of.pipe';



@NgModule({
    declarations: [TypeOfPipe],
    exports: [
        TypeOfPipe
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
