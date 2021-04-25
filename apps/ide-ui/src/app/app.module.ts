import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from './layout/layout.module';
import {EditorModule} from './routes/editor/editor.module';
import {RouterModule, Routes} from '@angular/router';
import {MainEditorComponent} from './routes/editor/main-editor/main-editor.component';
import {HttpClientModule} from '@angular/common/http';
import {ListChangesComponent} from './routes/dev/list-changes/list-changes.component';
import {DevModule} from './routes/dev/dev.module';
import {WelcomeModule} from './routes/welcome/welcome.module';
import {WelcomeComponent} from "./routes/welcome/main/welcome.component";
import {ScreenModule} from "@dontcode/plugin-screen";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FieldsModule} from "@dontcode/plugin-fields";
import {ProjectModule} from "./routes/project/project.module";

const appRoutes:Routes = [
  { path: '', component: WelcomeComponent },
  {path: 'editor', component: MainEditorComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'dev', component: ListChangesComponent},
  {path: 'newTabDev', component: ListChangesComponent},
  { path: 'project', loadChildren: () => import('./routes/project/project.module').then(m => m.ProjectModule) }]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule
    , EditorModule, LayoutModule, DevModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false,useHash:true } // <-- debugging purposes only
    ),
  HttpClientModule,
  WelcomeModule
    ,ScreenModule
    ,FieldsModule
    ,FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
