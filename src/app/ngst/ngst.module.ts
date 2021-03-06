import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table/table.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {PolymorphicContainerDirective} from './directives/polymorphic-container.directive';
import {RawInputComponent} from './inputs/raw-input/raw-input.component';
import {InputContainerComponent} from './inputs/input-container/input-container.component';
import {FormsModule} from '@angular/forms';
import {NewRowDialogComponent} from './new-row-dialog/new-row-dialog.component';
import {StopPropogationDirective} from './directives/stop-propogation.directive';
import {SelectionInputComponent} from './inputs/selection-input/selection-input.component';
import {BooleanInputComponent} from './inputs/boolean-input/boolean-input.component';
import {TextAreaInputComponent} from './inputs/raw-input/text-area-input.component';
import {DynamicCellComponent} from './dynamic-cell/dynamic-cell.component';
import { FilterCellWrapperComponent } from './filter-cell/filter-cell-wrapper.component';
import { IntFilterComponent } from './filter-cell/int-filter/int-filter.component';
import {FilterCellComponent} from './filter-cell/filter-cell';
import { StringFilterComponent } from './filter-cell/string-filter/string-filter.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatTooltipModule,
    MatCheckboxModule
  ],
  declarations: [
    TableComponent,
    PolymorphicContainerDirective,
    RawInputComponent,
    TextAreaInputComponent,
    SelectionInputComponent,
    BooleanInputComponent,
    InputContainerComponent,
    NewRowDialogComponent,
    DynamicCellComponent,
    StopPropogationDirective,
    FilterCellWrapperComponent,
    IntFilterComponent,
    FilterCellComponent,
    StringFilterComponent
  ],
  exports: [
    TableComponent,
    RawInputComponent,
    TextAreaInputComponent,
    SelectionInputComponent,
    BooleanInputComponent,
  ],
  entryComponents: [
    FilterCellWrapperComponent,
    RawInputComponent,
    TextAreaInputComponent,
    SelectionInputComponent,
    BooleanInputComponent,
    NewRowDialogComponent
  ]
})
export class NgstModule {
}
