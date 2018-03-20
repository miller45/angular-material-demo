/*
 * @author RKlein
 */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';


@Component({

    selector: 'datepicker-demo',
    templateUrl: 'datepicker-demo.html',
    styleUrls: ['datepicker-demo.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerDemoComponent {
    touch: boolean;
    filterOdd: boolean;
    yearView: boolean;
    inputDisabled: boolean;
    datepickerDisabled: boolean;
    minDate: Date;
    maxDate: Date;
    startAt: Date;
    date: Date;
    lastDateInput: Date | null;
    lastDateChange: Date | null;

    dateFilter = (date: Date) => date.getMonth() % 2 == 1 && date.getDate() % 2 == 0;

    onDateInput = (e: MatDatepickerInputEvent<Date>) => this.lastDateInput = e.value;
    onDateChange = (e: MatDatepickerInputEvent<Date>) => this.lastDateChange = e.value;
}

//
// import { NativeDateAdapter } from '@angular/material';
//
// export class GermanDateAdapter extends NativeDateAdapter {
//     parse(value: any): Date | null {
//         if ((typeof value === 'string') && (value.indexOf('.') > -1)) {
//             const str = value.split('.');
//             if (str.length < 2 || isNaN(+str[0]) || isNaN(+str[1]) || isNaN(+str[2])) {
//                 return null;
//             }
//             return new Date(Number(str[2]), Number(str[1]) - 1, Number(str[0]), 12);
//         }
//         const timestamp = typeof value === 'number' ? value : Date.parse(value);
//         return isNaN(timestamp) ? null : new Date(timestamp);
//     }
// }