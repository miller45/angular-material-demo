/**
 @author RKlein
 */
import {Component, OnInit, OnDestroy, ViewEncapsulation, HostListener} from '@angular/core';

@Component({
    templateUrl: './material-demo.component.html',
    styleUrls: ['./material-demo.component.less'],
    encapsulation: ViewEncapsulation.None
})

export class MaterialDemoComponent implements OnInit, OnDestroy {

    constructor() {

    }

    public isNormalDemo = false;
    public isInputDemo = false;
    public isOtherDemo = false;


    public color: string = 'primary';
    public mode: string = 'indeterminate';
    public value: number = 50;

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    public setDemos(section: string) {
        switch (section) {
            case 'normal':
                this.isNormalDemo = true;
                this.isOtherDemo = false;
                this.isInputDemo = false;
                break;
            case 'other':
                this.isNormalDemo = false;
                this.isOtherDemo = true;
                this.isInputDemo = false;

                break;
            case 'input':
                this.isNormalDemo = false;
                this.isOtherDemo = false;
                this.isInputDemo = true;
                break;
        }
    }


}
