import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsComponent} from '../forms/forms.component';
import {FormInput} from '../form-input/form-input.directive';
import {FormSelect} from '../form-select/form-select.component';
import {FormError} from '../form-error/form-error.component';
import {FormSelectBase} from '../form-select/form-select-base.directive';
import {FormLabel} from '../form-label/form-label.component';
import {FormField} from '../form-field/form-field.component';


@NgModule({
  declarations: [
    FormsComponent,
    FormField,
    FormInput,
    FormError,
    FormLabel,
    FormSelectBase,
    FormSelect,
  ],
  exports: [
    FormsComponent,
    FormField,
    FormInput,
    FormError,
    FormLabel,
    FormSelectBase,
    FormSelect,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class MyFormModule {
}
