import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListChangesComponent} from './list-changes/list-changes.component';
import {TableModule} from "primeng/table";


@NgModule({
  declarations: [ListChangesComponent],
    imports: [
        CommonModule,
        TableModule
    ]
})
export class DevModule { }
