import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicRoutingModule } from './solic-routing.module';
import {SolicComponent}from './solic.component';

import { MdlModule } from '@angular-mdl/core';



@NgModule({
  imports: [
    CommonModule,
    SolicRoutingModule,
    MdlModule,
   
    
  ],
  declarations: [
    SolicComponent,
    

  ]
})
export class SolicModule { }
