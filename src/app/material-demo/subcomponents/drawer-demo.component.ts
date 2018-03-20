/*
 * @author RKlein
 */

import { Component, ViewEncapsulation } from '@angular/core';

@Component({

    selector: 'drawer-demo',
    templateUrl: 'drawer-demo.html',
    styleUrls: ['drawer-demo.scss'],
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false,
})
export class DrawerDemoComponent {
    invert = false;
}
