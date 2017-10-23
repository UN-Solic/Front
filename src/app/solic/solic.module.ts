import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicRoutingModule } from './solic-routing.module';
import {SolicComponent}from './solic.component';
@NgModule({
  imports: [
    CommonModule,
    SolicRoutingModule
  ],
  declarations: [
    SolicComponent
  ]
})
export class SolicModule { }
