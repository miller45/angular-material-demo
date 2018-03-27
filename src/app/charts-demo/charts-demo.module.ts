/**
 @author RKlein
 */
import {NgModule} from '@angular/core';
import {ChartModule} from 'angular-highcharts';
import {ChartsDemoComponent} from './charts-demo.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [CommonModule, ChartModule],
    exports: [ChartsDemoComponent],
    declarations: [ChartsDemoComponent], /* components ("static"), pipes, and directives*/
    providers: [],
    entryComponents: [] /* dynamically added compoennts */
})
export class ChartsDemoModule {
}
