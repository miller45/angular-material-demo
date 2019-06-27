/**
 * @author RKlein
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {MaterialDemoComponent} from './material-demo.component';
import {
  DateAdapter,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatIconRegistry,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {DialogContentComponent} from './dialogcontent.component';

import {
  AutocompleteDemoComponent,
  BaselineDemoComponent,
  ButtonDemoComponent,
  ButtonToggleDemoComponent,
  CardDemoComponent,
  CheckboxDemoComponent,
  ChipsDemoComponent,
  DatepickerDemoComponent,
  DrawerDemoComponent,
  ExpansionDemoComponent,
  FabSpeedDialDemoComponent,
  FocusOriginDemoComponent,
  GridListDemoComponent,
  IconDemoComponent,
  InputDemoComponent,
  ListDemoComponent,
  LiveAnnouncerDemoComponent,
  MatCheckboxDemoNestedChecklistComponent,
  MenuDemoComponent,
  SlideToggleDemoComponent
} from './subcomponents';

import {CommonModule} from '@angular/common';
import {RolibMaterialUIModule} from '../rolib/ui-material/rolib-ui-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';


const demoComponents = [AutocompleteDemoComponent, BaselineDemoComponent, ButtonDemoComponent, ButtonToggleDemoComponent, CardDemoComponent, MatCheckboxDemoNestedChecklistComponent, CheckboxDemoComponent, ChipsDemoComponent, DatepickerDemoComponent, DrawerDemoComponent, ExpansionDemoComponent, FabSpeedDialDemoComponent, FocusOriginDemoComponent, GridListDemoComponent, IconDemoComponent, InputDemoComponent, ListDemoComponent, LiveAnnouncerDemoComponent, MenuDemoComponent, SlideToggleDemoComponent];

/**
 module containts components for search demos
 */
@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    MatNativeDateModule,
    RolibMaterialUIModule
  ],
  declarations: [
    demoComponents, MaterialDemoComponent, DialogContentComponent
  ],
  providers: [],
  entryComponents: [DialogContentComponent]
})
export class MaterialDemoModule {
  constructor(private dateAdapter: DateAdapter<Date>, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.dateAdapter.setLocale('en-GB');

      iconRegistry
        .addSvgIcon('thumb-up',
          sanitizer.bypassSecurityTrustResourceUrl('./assets/thumbup-icon.svg'));
    iconRegistry.registerFontClassAlias('fontawesome', 'fas');
    // https://stackoverflow.com/questions/44949258/set-locale-in-angular2-material-datepicker
    // iconRegistry
    //   .addSvgIcon('thumb-up',
    //     sanitizer.bypassSecurityTrustResourceUrl('/app/material-demo/subcomponents/assets/thumbup-icon.svg'));
      // .addSvgIconSetInNamespace('core',
      //   sanitizer.bypassSecurityTrustResourceUrl('./assets/core-icon-set.svg'))
      // .registerFontClassAlias('fontawesome', 'fa');
  }

}
