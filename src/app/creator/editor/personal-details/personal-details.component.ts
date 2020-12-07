import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Cv} from '../../../../model/data';
import {FormGroup} from '@angular/forms';
import {ADDITION_DETAILS, EMAIL, FIRSTNAME, LASTNAME, PHONE} from './personal-details-container.component';
import {Subject, timer} from 'rxjs';
import {debounce, map, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDetailsComponent implements OnInit, OnDestroy {
  _destroyed = new Subject<void>();

  @Input() form: FormGroup;
  @Output() update: EventEmitter<Cv> = new EventEmitter<Cv>();

  readonly FIRSTNAME = FIRSTNAME;
  readonly LASTNAME = LASTNAME;
  readonly EMAIL = EMAIL;
  readonly PHONE = PHONE;
  readonly ADDITION_DETAILS = ADDITION_DETAILS;

  constructor() {
  }

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        debounce(() => timer(500)),
        takeUntil(this._destroyed)
      )
      .subscribe(() => {
        this.updateGivenCV();
      });
  }

  updateGivenCV(): void {
    console.log(this.form.value);
    this.update.emit(this.form.value);
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}

