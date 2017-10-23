import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './landing-page.component';
const landingPageRoutes: Routes = [
  {
    path:'',
    component:LandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(landingPageRoutes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
