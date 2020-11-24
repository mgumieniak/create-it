import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Cv} from '../../../../model/data';
import {FormGroup} from '@angular/forms';
import {EMAIL, FIRSTNAME, LASTNAME, PHONE} from './personal-details-container.component';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDetailsComponent {
  @Input() form: FormGroup;
  @Output() update: EventEmitter<Cv> = new EventEmitter<Cv>();

  readonly EMAIL = EMAIL;
  readonly FIRSTNAME = FIRSTNAME;
  readonly LASTNAME = LASTNAME;
  readonly PHONE = PHONE;

  constructor() {
  }

  updateGivenCV(): void {
    console.log(this.form.value);
  }
}
