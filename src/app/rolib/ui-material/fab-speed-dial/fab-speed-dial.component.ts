/*
 * @author RKlein
 * but copy and paste and cleanup from https://github.com/jefersonestevo/angular-smd/tree/master/src/app/shared/component/smd-fab-speed-dial
 * for usage see README.md
 */

import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewEncapsulation,
    AfterContentInit,
    ElementRef,
    Renderer,
    ContentChild,
    HostBinding,
    HostListener,
    forwardRef
} from "@angular/core";
import { SmdFabSpeedDialActionsComponent } from "./fab-speed-dial-actions.component";


/* tslint:disable:no-forward-ref */
@Component({
    selector: 'smd-fab-speed-dial',
    template: `
        <div class="smd-fab-speed-dial-container">
            <ng-content select="smd-fab-trigger"></ng-content>
            <ng-content select="smd-fab-actions"></ng-content>
        </div>
    `,
    styleUrls: ['fab-speed-dial.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SmdFabSpeedDialComponent implements AfterContentInit {
    private isInitialized: boolean = false;
    private _direction: string = 'up';
    private _open: boolean = false;
    private _animationMode: string = 'fling';

    /**
     * Whether this speed dial is fixed on screen (user cannot change it by clicking)
     */
    @Input() public fixed: boolean = false;

    /**
     * Whether this speed dial is opened
     */
    @HostBinding('class.smd-opened')
    @Input()
    public get open() {
        return this._open;
    }

    public set open(open: boolean) {
        let previousOpen = this._open;
        this._open = open;
        if (previousOpen != this._open) {
            this.openChange.emit(this._open);
            if (this.isInitialized) {
                this.setActionsVisibility();
            }
        }
    }

    /**
     * The direction of the speed dial. Can be 'up', 'down', 'left' or 'right'
     */
    @Input()
    public get direction() {
        return this._direction;
    }

    public set direction(direction: string) {
        let previousDir = this._direction;
        this._direction = direction;
        if (previousDir != this.direction) {
            this._setElementClass(previousDir, false);
            this._setElementClass(this.direction, true);

            if (this.isInitialized) {
                this.setActionsVisibility();
            }
        }
    }

    /**
     * The animation mode to open the speed dial. Can be 'fling' or 'scale'
     */
    @Input()
    public get animationMode() {
        return this._animationMode;
    }

    public set animationMode(animationMode: string) {
        let previousAnimationMode = this._animationMode;
        this._animationMode = animationMode;
        if (previousAnimationMode != this._animationMode) {
            this._setElementClass(previousAnimationMode, false);
            this._setElementClass(this.animationMode, true);

            if (this.isInitialized) {
                // To start another detect lifecycle and force the "close" on the action buttons
                Promise.resolve(null).then(() => this.open = false);
            }
        }
    }

    @Output() public openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ContentChild(forwardRef(() => SmdFabSpeedDialActionsComponent)) _childActions: SmdFabSpeedDialActionsComponent;

    constructor(private elementRef: ElementRef, private renderer: Renderer) {
    }

    ngAfterContentInit(): void {
        this.isInitialized = true;
        this.setActionsVisibility();
        this._setElementClass(this.direction, true);
        this._setElementClass(this.animationMode, true);
    }

    /**
     * Toggle the open state of this speed dial
     */
    public toggle() {
        this.open = !this.open;
    }

    /**
     * only public for template bindikng
     * */
    @HostListener('click')
    public _onClick() {
        if (!this.fixed && this.open) {
            this.open = false;
        }
    }

    public setActionsVisibility() {
        if (this.open) {
            this._childActions.show();
        } else {
            this._childActions.hide();
        }
    }

    private _setElementClass(elemClass: string, isAdd: boolean) {
        this.renderer.setElementClass(this.elementRef.nativeElement, `smd-${elemClass}`, isAdd);
    }
}

/* tslint:enable:no-forward-ref */
