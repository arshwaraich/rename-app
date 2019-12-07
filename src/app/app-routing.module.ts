import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StringComponent } from './string/string.component';
import { GpsInfoComponent } from './gps-info/gps-info.component';
import { IncrementNumberComponent } from './increment-number/increment-number.component';

import { PreviewBigComponent } from './preview-big/preview-big.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/preview'},
  {path: 'string', component: StringComponent},
  {path: 'fileData', redirectTo: '/preview'},
  {path: 'gps-info', component: GpsInfoComponent},
  {path: 'date', redirectTo: '/preview'},
  {path: 'incrementNumber', component: IncrementNumberComponent},
  {path: 'originalName', redirectTo: '/preview'},
  {path: 'preview', component: PreviewBigComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
