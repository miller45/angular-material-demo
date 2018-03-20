/*
 * @author RKlein
 */

import { Component } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';


@Component({

    selector: 'focus-origin-demo',
    templateUrl: 'focus-origin-demo.html',
    styleUrls: ['focus-origin-demo.scss'],
})
export class FocusOriginDemoComponent {
    constructor(public fom: FocusMonitor) {
    }
}
