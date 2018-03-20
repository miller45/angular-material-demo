/*
 * @author RKlein
 */
import { Component } from '@angular/core';


@Component({
    selector: 'button-demo',
    templateUrl: 'button-demo.html',
    styleUrls: ['button-demo.scss'],
})
export class ButtonDemoComponent {
    isDisabled: boolean = false;
    clickCounter: number = 0;
    toggleDisable: boolean = false;

    actionX() {
    }
    action1() {
    }
    action2() {
    }
    action3() {
    }
    action4() {
    }
}
