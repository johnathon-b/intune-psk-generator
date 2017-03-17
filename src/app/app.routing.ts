import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {IosComponent} from './components/ios/ios.component';
import {AndroidComponent} from './components/android/android.component';


const appRoutes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'ios',
        component: IosComponent
    },
    {
        path:'android',
        component: AndroidComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);