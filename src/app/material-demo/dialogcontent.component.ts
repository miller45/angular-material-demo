/*
 * @author RKlein
 */

import { Component, Optional } from "@angular/core";
import { MatDialogRef } from "@angular/material";

/** material demo dialog content*/
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
    constructor( @Optional() public dialogRef: MatDialogRef<DialogContentComponent>) { }
}
