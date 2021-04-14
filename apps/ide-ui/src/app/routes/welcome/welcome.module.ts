import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './main/welcome.component';
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule, ButtonModule
  ]
})
export class WelcomeModule { }
