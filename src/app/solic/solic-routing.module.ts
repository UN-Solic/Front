import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SolicComponent} from './solic.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {DevicesComponent}from'./devices/devices.component'
export const solicRoutes: Routes = [
{
path: '',
component:SolicComponent,
children:[
  {
    path: 'devices',
    loadChildren: 'app/solic/devices/devices.module#DevicesModule',
    
  },
  {
    path:'statistics',
    loadChildren:'app/solic/statistics/statistics.module#StatisticsModule'
  },
  {
    path:'reports',
    loadChildren:'app/solic/reports/reports.module#ReportsModule'

  },
  {
    path:'',
    loadChildren:'app/solic/devices/devices.module#DevicesModule'
  }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(solicRoutes)],
 
  exports: [RouterModule,
    ],
    
})
export class SolicRoutingModule { }
