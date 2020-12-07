import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Cv, PersonalDetails} from '../../../../model/data';
import {RestClientService} from '../../../../model/rest-client.service';
import {CvStateService} from '../../cvStateService/cv-state.service';
import {Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

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
export class PersonalDetailsContainerComponent implements OnInit, OnDestroy {
  private _updateCvAction: Subject<Cv> = new Subject();
  private _destroyed = new Subject<void>();

  @Input() cv: Cv;

  forms: FormGroup;

  constructor(private fb: FormBuilder,
              private restClient: RestClientService,
              private cvStateService: CvStateService) {
  }

  ngOnInit(): void {
    this.forms = this.fb.group({
      [FIRSTNAME]: [this.cv.personalDetails[FIRSTNAME], [Validators.required, Validators.minLength(3)]],
      [LASTNAME]: [this.cv.personalDetails[LASTNAME], [Validators.required]],
      [EMAIL]: [this.cv.personalDetails[LASTNAME], [Validators.required, Validators.email]],
      [PHONE]: [this.cv.personalDetails[PHONE], [Validators.required, Validators.pattern('/^[0-9]+$/')]],
      [ADDITION_DETAILS]: this.fb.array([]),
    });

    this.observeCvUpdate();
  }

  private observeCvUpdate(): void {
    this._updateCvAction.asObservable()
      .pipe(
        map((cv: Cv) => this.restClient.update(cv)),
        takeUntil(this._destroyed))
      .subscribe();
  }

  update(personalDetails: PersonalDetails): void {
    const cv = this._createNewCV(personalDetails);
    this._updateGivenCv(cv);
  }

  private _createNewCV(personalDetails: PersonalDetails): Cv {
    return {
      id: this.cv.id,
      personalDetails,
      experiences: this.cv.experiences,
      skillToRating: this.cv.skillToRating
    };
  }

  private _updateGivenCv(cv: Cv): void {
    this._updateCvAction.next(cv);
    this.cvStateService.updateGivenCv(cv);
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
