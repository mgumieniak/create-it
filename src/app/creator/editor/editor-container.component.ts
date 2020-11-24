import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Cv} from '../../../model/data';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-editor-container',
  templateUrl: './editor-container.component.html',
  styleUrls: ['./editor-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorContainerComponent implements OnInit {
  @Input() cv: Cv;

  forms: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.forms = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      type: ['', Validators.required],
      account: this.fb.group({
        email: ['', Validators.required],
        confirm: ['', Validators.required]
      })
    });
  }

}
