/**
 * @author RKlein
 */
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material";

import { SmdFabSpeedDialActionsComponent } from "./fab-speed-dial/fab-speed-dial-actions.component";
import { SmdFabSpeedDialTriggerComponent } from "./fab-speed-dial/fab-speed-dial-trigger.component";
import { SmdFabSpeedDialComponent } from "./fab-speed-dial/fab-speed-dial.component";


/**
 * Module to publish all mterial ui rolib components.
 * please add no dependencies from e.g. rolib to this module without consulting RKlein
 */
@NgModule({
    imports: [
        CommonModule, MatButtonModule
    ],
    declarations: [SmdFabSpeedDialComponent, SmdFabSpeedDialActionsComponent, SmdFabSpeedDialTriggerComponent],
    exports: [SmdFabSpeedDialComponent, SmdFabSpeedDialActionsComponent, SmdFabSpeedDialTriggerComponent],
    entryComponents: [],
    providers: []
})

export class RolibMaterialUIModule {

}
