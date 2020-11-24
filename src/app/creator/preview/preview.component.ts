import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Cv} from '../../../model/data';

@Component({
  selector: 'app-preview-ui',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewComponent{
  @Input() cv: Cv;
}
