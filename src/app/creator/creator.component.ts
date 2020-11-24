import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Cv} from '../../model/data';

@Component({
  selector: 'app-creator-ui',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatorComponent {
  @Input() cv: Cv;
}
