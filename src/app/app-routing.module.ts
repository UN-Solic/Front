import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent} from './landing-page/landing-page.component';



import { AppComponent } from './app.component';

//using lazy loading 
const appRoutes: Routes = [
    {
        path: 'landing',
        loadChildren: 'app/landing-page/landing-page.module#LandingPageModule'
    },
    {
        path: 'app' ,
        loadChildren: 'app/solic/solic.module#SolicModule'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'landing',
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}