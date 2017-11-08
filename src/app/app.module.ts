import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AmChartsService } from "@amcharts/amcharts3-angular";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from'./shared/shared.module';
import {ChartService} from './services/chart/chart.service'
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,

 
  ],
  imports: [
   
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
   
    
  ],
  providers: [AmChartsService,
              ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
