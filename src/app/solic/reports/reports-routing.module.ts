import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportsComponent} from './reports.component';


export const reportsRoutes: Routes = [
{
path: '',
component:ReportsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(reportsRoutes)],
 
  exports: [RouterModule,
    ],
    
})
export class ReportsRoutingModule { }