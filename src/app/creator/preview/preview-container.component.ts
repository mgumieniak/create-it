import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Cv} from '../../../model/data';

@Component({
  selector: 'app-preview-container',
  templateUrl: './preview-container.component.html',
  styleUrls: ['./preview-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewContainerComponent {
  @Input() cv: Cv;
}
