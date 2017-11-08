import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StatisticsComponent} from './statistics.component'
import {StatisticsRoutingModule}from './statistics-rounting-module'
import {ChartsComponent} from '../charts/charts.component'
import {ChartsRoutingModule}from '../charts/charts-routing.module';

import { DateTimePickerModule } from 'ng-pick-datetime';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    ChartsRoutingModule,
    DateTimePickerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    StatisticsComponent,
    ChartsComponent
  ]
})
export class StatisticsModule { }
