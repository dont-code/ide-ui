import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './layout/main/main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { EditorModule } from './routes/editor/editor.module';
import { RouterModule, Routes } from '@angular/router';
import { MainEditorComponent } from './routes/editor/main-editor/main-editor.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const appRoutes: Routes = [
  { path: '', component: MainEditorComponent }]

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [BrowserModule, BrowserAnimationsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, EditorModule,
    FlexLayoutModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
