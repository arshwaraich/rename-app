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
  {path: 'home', component: HomeComponent}, // home
  {path: 'String', component: StringComponent},
  {path: 'FileData', component: FileDataComponent},
  {path: 'GPSinfo', component: GpsInfoComponent},
  {path: 'Date', component: DateComponent},
  {path: 'IncrementNumber', component: IncrementNumberComponent},
  {path: 'OriginalName', component: OriginalNameComponent},
  {path: 'Preview', component: PreviewBigComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
