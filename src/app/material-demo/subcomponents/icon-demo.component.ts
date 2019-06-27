/*
 * @author RKlein
 */

import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
    selector: 'mat-icon-demo',
    templateUrl: 'icon-demo.html',
    styleUrls: ['icon-demo.scss'],
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false,
})
export class IconDemoComponent {
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        // icons registered in materia-demo-module
        iconRegistry
            .addSvgIcon('thumb-up',
                sanitizer.bypassSecurityTrustResourceUrl('./assets/thumbup-icon.svg'))
            .addSvgIconSetInNamespace('core',
                sanitizer.bypassSecurityTrustResourceUrl('./assets/core-icon-set.svg'))
            .registerFontClassAlias('fontawesome', 'fa')
        .addSvgIcon('table_chart',
          sanitizer.bypassSecurityTrustResourceUrl('./assets/baseline-table_chart-24px.svg'));
    }
}
