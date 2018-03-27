import {Component, HostListener, Optional, ViewEncapsulation} from '@angular/core';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {Key} from 'ts-keycode-enum';


@Component({
    templateUrl: './app-default-demo.component.html',
    styleUrls: ['./app-default-demo.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppDefaultDemoComponent {
    isDarkTheme = false;
    lastDialogResult: string;
    mode: string;
    value: number;

    foods: any[] = [
        {name: 'Pizza', rating: 'Excellent'},
        {name: 'Burritos', rating: 'Great'},
        {name: 'French fries', rating: 'Pretty good'},
    ];

    public selectedValue: string;

    public games = [
        {value: 'rts-0', viewValue: 'Starcraft'},
        {value: 'rpg-1', viewValue: 'Baldur\'s Gate'},
        {value: 'fps-2', viewValue: 'Doom'}
    ];

    public progress = 0;
    public slider = {
        'autoTicks': false,
        'disabled': false,
        'invert': false,
        'max': 100,
        'min': 0,
        'showTicks': false,
        'step': 1,
        'thumbLabel': false,
        'value': 0,
        'vertical': false,
        'tickInterval': 1,
        'checked': true
    };
    public tiles = [
        {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];

    public color: string;

    public availableColors = [
        {name: 'none', color: 'dummy'},
        {name: 'Primary', color: 'primary'},
        {name: 'Accent', color: 'accent'},
        {name: 'Warn', color: 'warn'},
        {name: 'Success', color: 'success'},
        {name: 'Info', color: 'info'},
        {name: 'Danger', color: 'danger'}
    ];


    isDisabled = false;
    clickCounter = 0;
    toggleDisable = false;


    constructor(private _dialog: MatDialog, private _snackbar: MatSnackBar) {

        this.disableStyleInHead('link-bootstrap-cdn'); // only one bootstrap framework must be enabled on start (there two in index html)

        // Update the value for the progress-bar on an interval.
        setInterval(() => {
            this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);
    }

    openDialog() {
        const dialogRef = this._dialog.open(DialogContentComponent);

        dialogRef.afterClosed().subscribe(result => {
            this.lastDialogResult = result;
        })
    }

    showSnackbar(message: string, action: string) {
        this._snackbar.open(message, action, {duration: 1000});
    }

    get tickInterval(): number | 'auto' {
        return this.slider.showTicks ? (this.slider.autoTicks ? 'auto' : this.slider.tickInterval) : null;
    }

    set tickInterval(v) {
        this.slider.tickInterval = Number(v);
    }


    /* disable the style that is included in page head**/
    private disableStyleInHead(id: string) {
        const oldStyleEle: any = document.getElementById(id);
        if (oldStyleEle != null) {
            oldStyleEle.disabled = true;
        }
    }

    /* (re)enable the style that is included in page head**/
    private enableStyleInHead(id: string) {
        const oldStyleEle: any = document.getElementById(id);
        if (oldStyleEle != null) {
            oldStyleEle.disabled = false;
        }
    }

    @HostListener('document:keydown', ['$event'])
    public keyDown(event: KeyboardEvent) {
        if (event.ctrlKey && event.shiftKey) {
            // <link id="link-bsweb-bootstrap-cdn" href="https://bsw/bswebcache/cdn/bootstrap/3.3.7-mod1/bootstrap.css" rel="stylesheet" >
            // <link id="link-bootstrap-cdn"  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
            switch (event.keyCode) {
                case Key.F1:
                    this.enableStyleInHead('link-bsweb-bootstrap-cdn');
                    this.disableStyleInHead('link-bootstrap-cdn');
                    this.showSnackbar('bsweb-boostrap', 'Ok');
                    break;
                case Key.F2:
                    this.disableStyleInHead('link-bsweb-bootstrap-cdn');
                    this.enableStyleInHead('link-bootstrap-cdn');
                    this.showSnackbar('original bootstrap ', 'Ok');
                    break;
                case Key.F3:
                    this.disableStyleInHead('link-bsweb-bootstrap-cdn');
                    this.disableStyleInHead('link-bootstrap-cdn');
                    this.showSnackbar('no bootstrap', 'Ok');
                    break;
                case Key.F9:
                    this.disableStyleInHead('link-material-fixes');
                    this.showSnackbar('no material fixes', 'Ok');
                    break;
                case Key.F10:
                    this.enableStyleInHead('link-material-fixes');
                    this.showSnackbar('yes material fixes', 'Ok');
                    break;
                // case Key.M:
                //     this.enableStyleInHead('link-bootstraplocal');
                //     this.disableStyleInHead('link-bootstrapcdn');
                //     break;
            }
        }

    }

}


@Component({
    template: `
        <h1 matDialogTitle>This is a dialog</h1>
        <div matDialogContent>
            <mat-form-field>
                <label>
                    This is a text box inside of a dialog.
                    <input matInput #dialogInput>
                </label>
            </mat-form-field>
        </div>
        <div matDialogActions>
            <button mat-raised-button [matDialogClose]="dialogInput.value">CLOSE</button>
        </div>
    `,
})
export class DialogContentComponent {
    constructor(@Optional() public dialogRef: MatDialogRef<DialogContentComponent>) {
    }
}
