import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Cv} from '../../../../../model/data';
import {FieldConfig} from '../../../../../model/field-config.interface';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-personal-details-container',
  templateUrl: './personal-details-container.component.html',
  styleUrls: ['./personal-details-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDetailsContainerComponent {
  @Input() cv: Cv;

  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)],
      className: 'full-name-input',
    },
  ];

}
