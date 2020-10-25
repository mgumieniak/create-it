import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild} from '@angular/core';
import {Cv} from '../../../../../model/data';
import {DynamicFormComponent} from '../../../../../dynamic-form/containers/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDetailsComponent implements AfterViewInit{
  @Input() cv: Cv;
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);
    this.form.setValue('name', 'Todd Motto');
    this.form.setValue('food', 'Pizza');
    this.cdr.detectChanges();
  }
}
