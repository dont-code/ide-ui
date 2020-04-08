import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainEditorComponent } from './main-editor/main-editor.component';



@NgModule({
  declarations: [MainEditorComponent],
  exports: [
    MainEditorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EditorModule { }
