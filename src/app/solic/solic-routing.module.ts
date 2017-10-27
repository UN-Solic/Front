import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SolicComponent} from './solic.component';


const solicRoutes: Routes = [
{
  path :'',
  component: SolicComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(solicRoutes)],
 
  exports: [RouterModule,
    ]
})
export class SolicRoutingModule { }
