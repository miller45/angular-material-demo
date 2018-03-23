/*
 * @author RKlein
 */

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';


let max = 5;

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({

    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'input-demo',
    templateUrl: 'input-demo.html',
    styleUrls: ['input-demo.scss'],
})
export class InputDemoComponent {
    floatingLabel: string = 'auto';
    color: boolean;
    requiredField: boolean;
    hideRequiredMarker: boolean;
    ctrlDisabled = false;
    textareaNgModelValue: string;

    name: string;
    errorMessageExample1: string;
    errorMessageExample2: string;
    errorMessageExample3: string;
    errorMessageExample4: string;
    dividerColorExample1: string;
    dividerColorExample2: string;
    dividerColorExample3: string;
    items: any[] = [
        {value: 10},
        {value: 20},
        {value: 30},
        {value: 40},
        {value: 50},
    ];
    rows = 8;
    formControl = new FormControl('hello', Validators.required);
    emailFormControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]);
    delayedFormControl = new FormControl('');
    model = 'hello';

    constructor() {
        setTimeout(() => this.delayedFormControl.setValue('hello'), 100);
    }

    addABunch(n: number) {
        for (let x = 0; x < n; x++) {
            this.items.push({value: ++max});
        }
    }

    customErrorStateMatcher: ErrorStateMatcher = {
        isErrorState: (control: FormControl | null) => {
            if (control) {
                const hasInteraction = control.dirty || control.touched;
                const isInvalid = control.invalid;

                return !!(hasInteraction && isInvalid);
            }

            return false;
        }
    };
}