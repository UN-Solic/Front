import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import {SharedModule} from '../../shared/shared.module'
import {ChartsComponent}from './charts.component'
@NgModule({
  imports: [
    CommonModule,
    AmChartsModule
  ],
  declarations: [
    ChartsComponent
  ]

})
export class ChartsModule { }
