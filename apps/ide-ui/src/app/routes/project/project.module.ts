import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProjectComponent} from './project.component';
import {DataViewModule} from "primeng/dataview";
import {ButtonModule} from "primeng/button";
import {SharedModule} from "../../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";


const routes: Routes = [
  { path: '', component: ProjectComponent }
];

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    DataViewModule,
    ButtonModule,
    SharedModule
  ]
})
export class ProjectModule { }