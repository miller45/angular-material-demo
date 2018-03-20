/*
 * @author RKlein
 * but copy and paste and cleanup from https://github.com/jefersonestevo/angular-smd/tree/master/src/app/shared/component/smd-fab-speed-dial
 * for usage see README.md
 */

import {
    Component,
    Input,
    Inject,
    forwardRef,

    HostBinding,
    HostListener
} from "@angular/core";
import { SmdFabSpeedDialComponent } from "./fab-speed-dial.component";

@Component({
    selector: 'smd-fab-trigger',
    template: `
        <ng-content select="[md-fab], [mat-fab]"></ng-content>
    `
})
/* tslint:disable:no-forward-ref */
export class SmdFabSpeedDialTriggerComponent {

    /**
     * Whether this trigger should spin (360dg) while opening the speed dial
     */
    @HostBinding('class.smd-spin')
    @Input() public spin: boolean = false;

    constructor(@Inject(forwardRef(() => SmdFabSpeedDialComponent)) private _parent: SmdFabSpeedDialComponent) {
    }

    /** only public for template binding */
    @HostListener('click', ['$event'])
    public _onClick(event: any) {
        if (!this._parent.fixed) {
            this._parent.toggle();
            event.stopPropagation();
        }
    }

}
/* tslint:enable:no-forward-ref */
