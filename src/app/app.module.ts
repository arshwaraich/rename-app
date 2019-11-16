import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FilenameBuilderComponent } from './filename-builder/filename-builder.component';
import { ElementsAreaComponent } from './elements-area/elements-area.component';
import { PreviewSmallComponent } from './preview-small/preview-small.component';
import { PreviewBigComponent } from './preview-big/preview-big.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    FilenameBuilderComponent,
    ElementsAreaComponent,
    PreviewSmallComponent,
    PreviewBigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
