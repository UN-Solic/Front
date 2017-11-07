import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DevicesComponent} from './devices.component';


export const devicesRoutes: Routes = [
{
path: '',
component:DevicesComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(devicesRoutes)],
 
  exports: [RouterModule,
    ],
    
})
export class DevicesRoutingModule { }