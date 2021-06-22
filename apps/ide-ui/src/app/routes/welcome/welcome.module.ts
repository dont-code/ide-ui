import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './main/welcome.component';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {BadgeModule} from "primeng/badge";


@NgModule({
  declarations: [WelcomeComponent],
    imports: [
        CommonModule, ButtonModule, CardModule, BadgeModule
    ]
})
export class WelcomeModule { }
