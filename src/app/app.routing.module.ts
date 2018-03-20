/**
 * @author RKlein
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppDefaultDemoComponent} from './app-default-demo.component';
import {MaterialDemoComponent} from './material-demo/material-demo.component';


const routes: Routes = [
    {
        path: '',
        component: AppDefaultDemoComponent,

    },
    {
        path: 'materialdemo',
        component:MaterialDemoComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule {
}
