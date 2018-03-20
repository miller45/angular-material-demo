/*
 * @author RKlein
 * but copy and paste and cleanup from https://github.com/jefersonestevo/angular-smd/tree/master/src/app/shared/component/smd-fab-speed-dial
 * for usage see README.md
 */

import { AfterContentInit, Component, ContentChildren, forwardRef, Inject, QueryList, Renderer } from "@angular/core";
import { MatButton } from "@angular/material";
import { SmdFabSpeedDialComponent } from "./fab-speed-dial.component";

const Z_INDEX_ITEM: number = 23;

/* tslint:disable:no-forward-ref */
@Component({
    selector: 'smd-fab-actions',
    template: `
        <ng-content select="[md-mini-fab], [mat-mini-fab]"></ng-content>
    `
})
export class SmdFabSpeedDialActionsComponent implements AfterContentInit {

    /** only public for template binding, dont use it*/
    @ContentChildren(MatButton) _buttons: QueryList<MatButton>;

    constructor(@Inject(forwardRef(() => SmdFabSpeedDialComponent)) private _parent: SmdFabSpeedDialComponent, private renderer: Renderer) {
    }

    ngAfterContentInit(): void {
        this._buttons.changes.subscribe(() => {
            this.initButtonStates();
            this._parent.setActionsVisibility();
        });

        this.initButtonStates();
    }

    private initButtonStates() {
        this._buttons.toArray().forEach((button, i) => {
            this.renderer.setElementClass(button._getHostElement(), 'smd-fab-action-item', true);
            this.changeElementStyle(button._getHostElement(), 'z-index', '' + (Z_INDEX_ITEM - i));
        })
    }

    /** show buttons */
    public show() {
        if (this._buttons) {
            this._buttons.toArray().forEach((button, i) => {
                let transitionDelay = 0;
                let transform;
                if (this._parent.animationMode == 'scale') {
                    // Incremental transition delay of 65ms for each action button
                    transitionDelay = 3 + (65 * i);
                    transform = 'scale(1)';
                } else {
                    transform = this.getTranslateFunction('0');
                }
                this.changeElementStyle(button._getHostElement(), 'transition-delay', transitionDelay + 'ms');
                this.changeElementStyle(button._getHostElement(), 'opacity', '1');
                this.changeElementStyle(button._getHostElement(), 'transform', transform);
            })
        }
    }

    /** hide buttons */
    public hide() {
        if (this._buttons) {
            this._buttons.toArray().forEach((button, i) => {
                let opacity = '1';
                let transitionDelay = 0;
                let transform;
                if (this._parent.animationMode == 'scale') {
                    transitionDelay = 3 - (65 * i);
                    transform = 'scale(0)';
                    opacity = '0';
                } else {
                    transform = this.getTranslateFunction((55 * (i + 1) - (i * 5)) + 'px');
                }
                this.changeElementStyle(button._getHostElement(), 'transition-delay', transitionDelay + 'ms');
                this.changeElementStyle(button._getHostElement(), 'opacity', opacity);
                this.changeElementStyle(button._getHostElement(), 'transform', transform);
            })
        }
    }

    private getTranslateFunction(value: string) {
        let dir = this._parent.direction;
        let translateFn = (dir == 'up' || dir == 'down') ? 'translateY' : 'translateX';
        let sign = (dir == 'down' || dir == 'right') ? '-' : '';
        return translateFn + '(' + sign + value + ')';
    }

    private changeElementStyle(elem: any, style: string, value: string) {
        // FIXME - Find a way to create a "wrapper" around the action button(s) provided by the user, so we don't change it's style tag
        this.renderer.setElementStyle(elem, style, value);
    }
}
/* tslint:enable:no-forward-ref */