import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { EditorModule } from './routes/editor/editor.module';
import { RouterModule, Routes } from '@angular/router';
import { MainEditorComponent } from './routes/editor/main-editor/main-editor.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: MainEditorComponent }]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule
    , EditorModule, LayoutModule,
    FlexLayoutModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
