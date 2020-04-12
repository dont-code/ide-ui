import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainEditorComponent } from './main-editor/main-editor.component';
import { TextHandlerComponent } from './text-handler/text-handler.component';
import { TextElementComponent } from './text-element/text-element.component';
import { SelectElementComponent } from './select-element/select-element.component';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '../../shared/shared.module';
import { InputElementComponent } from './input-element/input-element.component';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [MainEditorComponent, TextHandlerComponent, TextElementComponent, SelectElementComponent, InputElementComponent],
  exports: [
    MainEditorComponent
  ],
    imports: [
        CommonModule,
        MatSelectModule,
        SharedModule,
        MatInputModule
    ]
})
export class EditorModule { }
