/*
 * @author RKlein
 */

import { Component } from '@angular/core';

@Component({
    selector: 'button-toggle-demo',
    templateUrl: 'button-toggle-demo.html'
})
export class ButtonToggleDemoComponent {
    isVertical = false;
    isDisabled = false;
    favoritePie = 'Apple';
    pieOptions = [
        'Apple',
        'Cherry',
        'Pecan',
        'Lemon',
    ];
}
