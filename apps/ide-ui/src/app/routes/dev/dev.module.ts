import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListChangesComponent } from './list-changes/list-changes.component';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [ListChangesComponent],
  imports: [
    CommonModule,
    MatListModule
  ]
})
export class DevModule { }
