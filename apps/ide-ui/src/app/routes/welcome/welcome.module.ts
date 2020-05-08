import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './main/welcome.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class WelcomeModule { }
