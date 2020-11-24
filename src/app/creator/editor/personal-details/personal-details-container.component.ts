import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Cv} from '../../../../model/data';
import {RestClientService} from '../../../../model/rest-client.service';
import {CvStateService} from '../../cvStateService/cv-state.service';

export const FIRSTNAME = 'firstname';
export const LASTNAME = 'lastname';
export const EMAIL = 'email';
export const PHONE = 'phone';
export const ADDITION_DETAILS = 'additionDetails';

@Component({
  selector: 'app-personal-details-container',
  templateUrl: './personal-details-container.component.html',
  styleUrls: ['./personal-details-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDetailsContainerComponent implements OnInit {
  @Input() cv: Cv;

  forms: FormGroup;

  constructor(private fb: FormBuilder,
              private restClient: RestClientService,
              private cvStateService: CvStateService) {
  }

  ngOnInit(): void {
    this.forms = this.fb.group({
      [FIRSTNAME]: [this.cv.personalDetails[FIRSTNAME], Validators.required],
      LASTNAME: [this.cv.personalDetails[LASTNAME], [Validators.required]],
      // additionDetails: this.fb.array([]),
      // EMAIL: [this.cv.personalDetails.get(EMAIL), [Validators.required, Validators.email]],
      // PHONE: [this.cv.personalDetails.get(PHONE), [Validators.required]],
    });
  }

  update(cv): void {
    this.restClient.update(cv).subscribe({
      next: (updatedCv) => this.cvStateService.updateGivenCv(updatedCv)
    });
  }
}
