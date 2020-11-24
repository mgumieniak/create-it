import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Cv} from '../../../model/data';

@Component({
  selector: 'app-editor-ui',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorComponent {
  @Input() cv: Cv;

}
