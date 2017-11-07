import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChartsComponent} from './charts.component';


export const chartsRoutes: Routes = [
{
path: '',
component:ChartsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(chartsRoutes)],
 
  exports: [RouterModule,
    ],
    
})
export class ChartsRoutingModule { }