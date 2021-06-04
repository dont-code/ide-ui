import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {RouterModule} from '@angular/router';
import {MenuModule} from "primeng/menu";
import {ButtonModule} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";
import {SidebarModule} from "primeng/sidebar";
import {MenuComponent} from "./menu/menu.component";
import {TooltipModule} from "primeng/tooltip";
import {OverlayPanelModule} from "primeng/overlaypanel";


@NgModule({
  declarations: [MainComponent, MenuComponent],
  exports: [
    MainComponent
  ],
    imports: [
        CommonModule, RouterModule, SidebarModule, ToolbarModule, ButtonModule, MenuModule, TooltipModule, OverlayPanelModule
    ]
})
export class LayoutModule { }
