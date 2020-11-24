import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormError implements OnInit {
  _isError = false;

  @Input() set isError(status: boolean) {
    this._isError = status;
    this.cdr.markForCheck();
  }

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }
}

