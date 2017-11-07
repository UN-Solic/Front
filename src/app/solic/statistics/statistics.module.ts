import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StatisticsComponent} from './statistics.component'
import {StatisticsRoutingModule}from './statistics-rounting-module'
import {ChartsComponent} from '../charts/charts.component'
@NgModule({
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ],
  declarations: [
    StatisticsComponent,
    ChartsComponent
  ]
})
export class StatisticsModule { }
