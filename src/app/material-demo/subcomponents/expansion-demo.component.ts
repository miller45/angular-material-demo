/*
 * @author RKlein
 */

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'expansion-demo',
    styleUrls: ['expansion-demo.scss'],
    templateUrl: 'expansion-demo.html',
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false,
})
export class ExpansionDemoComponent {
    displayMode: string = 'default';
    multi = false;
    hideToggle = false;
    disabled = false;
    showPanel3 = true;
    expandedHeight: string;
    collapsedHeight: string;
}
