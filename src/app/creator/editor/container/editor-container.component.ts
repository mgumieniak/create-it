import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Cv} from '../../../../model/data';

@Component({
  selector: 'app-editor-container',
  templateUrl: './editor-container.component.html',
  styleUrls: ['./editor-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorContainerComponent {
  @Input() cv: Cv;

}
