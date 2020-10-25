import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Cv} from '../../../model/data';
import {CvStateService} from '../cvStateService/cv-state.service';

@Component({
  selector: 'app-creator-container',
  templateUrl: './creator-container.component.html',
  styleUrls: ['./creator-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatorContainerComponent {

  cv$: Observable<Cv> = this.cvService.getCV();

  constructor(
    private cvService: CvStateService
  ) {
  }
}
