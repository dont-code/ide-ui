import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from './layout/layout.module';
import {EditorModule} from './routes/editor/editor.module';
import {RouterModule, Routes} from '@angular/router';
import {MainEditorComponent} from './routes/editor/main-editor/main-editor.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {ListChangesComponent} from './routes/dev/list-changes/list-changes.component';
import {DevModule} from './routes/dev/dev.module';
import {WelcomeModule} from './routes/welcome/welcome.module';
import {WelcomeComponent} from "./routes/welcome/main/welcome.component";
import {ScreenModule} from "@dontcode/plugin-screen";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const appRoutes:Routes = [
  { path: '', component: WelcomeComponent },
  {path: 'editor', component: MainEditorComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'dev', component: ListChangesComponent},
  {path: 'newTabDev', component: ListChangesComponent}]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule
    , EditorModule, LayoutModule, DevModule,
    FlexLayoutModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: false,useHash:true } // <-- debugging purposes only
    ),
  HttpClientModule,
  WelcomeModule
    ,ScreenModule, FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
