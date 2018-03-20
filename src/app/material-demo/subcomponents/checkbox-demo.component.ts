/*
 * @author RKlein
 */

import { Component } from '@angular/core';


@Component({
    selector: 'mat-checkbox-demo',
    templateUrl: 'checkbox-demo.html',
    styleUrls: ['checkbox-demo.scss'],
})
export class CheckboxDemoComponent {
    isIndeterminate: boolean = false;
    isChecked: boolean = false;
    isDisabled: boolean = false;
    alignment: string = 'start';
    useAlternativeColor: boolean = false;

    printResult() {
        if (this.isIndeterminate) {
            return 'Maybe!';
        }
        return this.isChecked ? 'Yes!' : 'No!';
    }

    checkboxColor() {
        return this.useAlternativeColor ? 'primary' : 'accent';
    }
}
