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
import { SubTextElementComponent } from './sub-text-element/sub-text-element.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import {AccordionModule} from "primeng/accordion";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";



@NgModule({
  declarations: [MainEditorComponent, TextHandlerComponent, TextElementComponent, SelectElementComponent, InputElementComponent, SubTextElementComponent],
  exports: [
    MainEditorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccordionModule,
    ButtonModule,
    DropdownModule,
    InputTextModule
  ]
})
export class EditorModule { }
