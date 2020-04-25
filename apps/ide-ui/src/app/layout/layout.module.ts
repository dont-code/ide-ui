import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [MainComponent],
  exports: [
    MainComponent
  ],
    imports: [
        CommonModule, MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule
        , RouterModule, MatMenuModule
    ]
})
export class LayoutModule { }
