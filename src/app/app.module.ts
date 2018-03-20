import 'hammerjs';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

import {MaterialDemoModule} from './material-demo/material-demo.module';
import {AppRoutingModule} from './app.routing.module';
import {RolibMaterialUIModule} from './rolib/ui-material/rolib-ui-material.module';
import {AppMaterialModule} from './app.material.module';
import {AppDefaultDemoComponent, DialogContentComponent} from './app-default-demo.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppMaterialModule,
        RolibMaterialUIModule,
        MaterialDemoModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    declarations: [AppComponent, DialogContentComponent, AppDefaultDemoComponent],
    entryComponents: [DialogContentComponent],
    bootstrap: [AppComponent],
})
export class AppModule {
}
