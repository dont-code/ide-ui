import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainEditorComponent} from './main-editor/main-editor.component';
import {TextHandlerComponent} from './text-handler/text-handler.component';
import {TextElementComponent} from './text-element/text-element.component';
import {SelectElementComponent} from './select-element/select-element.component';
import {SharedModule} from '../../shared/shared.module';
import {InputElementComponent} from './input-element/input-element.component';
import {SubTextElementComponent} from './sub-text-element/sub-text-element.component';
import {AccordionModule} from "primeng/accordion";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {AutoCompleteModule} from "primeng/autocomplete";


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
        InputTextModule,
        FormsModule,
        AutoCompleteModule
    ]
})
export class EditorModule { }
