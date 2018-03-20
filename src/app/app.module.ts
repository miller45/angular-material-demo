import 'hammerjs';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {AppMaterialModule} from './app.material.module';
import {AppComponent, DialogContentComponent} from './app.component';
import {RolibMaterialUIModule} from '../rolib/ui-material/rolib-ui-material.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppMaterialModule,
        RolibMaterialUIModule,
        BrowserAnimationsModule
    ],
    declarations: [AppComponent, DialogContentComponent],
    entryComponents: [DialogContentComponent],
    bootstrap: [AppComponent],
})
export class AppModule {
}
