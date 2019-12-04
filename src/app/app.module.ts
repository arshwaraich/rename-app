import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FilenameBuilderComponent } from './filename-builder/filename-builder.component';
import { PreviewBigComponent } from './preview-big/preview-big.component';
import { HomeComponent } from './home/home.component';
import { StringComponent } from './string/string.component';
import { FileDataComponent } from './file-data/file-data.component';
import { GpsInfoComponent } from './gps-info/gps-info.component';
import { DateComponent } from './date/date.component';
import { IncrementNumberComponent } from './increment-number/increment-number.component';
import { OriginalNameComponent } from './original-name/original-name.component';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    FilenameBuilderComponent,
    PreviewBigComponent,
    HomeComponent,
    StringComponent,
    FileDataComponent,
    GpsInfoComponent,
    DateComponent,
    IncrementNumberComponent,
    OriginalNameComponent
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
