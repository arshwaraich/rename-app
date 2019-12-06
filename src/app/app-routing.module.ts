import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StringComponent } from './string/string.component';
import { FileDataComponent } from './file-data/file-data.component';
import { GpsInfoComponent } from './gps-info/gps-info.component';
import { DateComponent } from './date/date.component';
import { IncrementNumberComponent } from './increment-number/increment-number.component';
import { OriginalNameComponent } from './original-name/original-name.component';

import { PreviewBigComponent } from './preview-big/preview-big.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent}, // home
  {path: 'string', component: StringComponent},
  {path: 'fileData', component: FileDataComponent},
  {path: 'gps-info', component: GpsInfoComponent},
  {path: 'date', component: DateComponent},
  {path: 'incrementNumber', component: IncrementNumberComponent},
  {path: 'originalName', component: OriginalNameComponent},
  {path: 'preview', component: PreviewBigComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
