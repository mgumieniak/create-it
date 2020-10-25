import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating-container',
  templateUrl: './rating-container.component.html',
  styleUrls: ['./rating-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
