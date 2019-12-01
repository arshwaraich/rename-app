import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FilenameBuilderComponent } from './filename-builder/filename-builder.component';
import { PreviewBigComponent } from './preview-big/preview-big.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    FilenameBuilderComponent,
    PreviewBigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
