import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicRoutingModule } from './solic-routing.module';
import {SolicComponent}from './solic.component';

import { MdlModule } from '@angular-mdl/core';
import { ChartsComponent } from './charts/charts.component';


@NgModule({
  imports: [
    CommonModule,
    SolicRoutingModule,
    MdlModule,
   
    
  ],
  declarations: [
    SolicComponent,
    //DevicesComponent,
    //ReportsComponent,
    //StatisticsComponent,
    ChartsComponent
  ]
})
export class SolicModule { }
