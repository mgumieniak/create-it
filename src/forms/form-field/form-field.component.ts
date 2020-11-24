import {AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, ElementRef, OnDestroy} from '@angular/core';
import {FormControlName} from '@angular/forms';
import {FormError} from '../form-error/form-error.component';
import {Subject, timer} from 'rxjs';
import {debounce, debounceTime, takeUntil} from 'rxjs/operators';
import {FormFieldControl} from './form-field-control.directive';
import {FormLabel} from '../form-label/form-label.component';

@Component({
  selector: 'form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormField implements OnDestroy, AfterContentInit {
  _destroyed = new Subject<void>();

  @ContentChild(FormError) private _errorMsg: FormError;
  @ContentChild(FormLabel, {read: ElementRef}) private _label: ElementRef<HTMLLabelElement>;
  @ContentChild(FormFieldControl) private _control: FormFieldControl;
  @ContentChild(FormControlName) private _formControlName: FormControlName;

  constructor() {
  }

  ngAfterContentInit(): void {
    this._formControlName.control.statusChanges
      .pipe(
        debounce(() => timer(500)),
        takeUntil(this._destroyed))
      .subscribe(this._setErrorMsgStatus);
  }

  private _setErrorMsgStatus = (status) => {
    this._errorMsg.isError = (status !== 'VALID');
    this._control.errorState = (status !== 'VALID');
  };

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}

