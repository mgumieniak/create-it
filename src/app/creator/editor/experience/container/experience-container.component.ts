import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-experience-container',
  templateUrl: './experience-container.component.html',
  styleUrls: ['./experience-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
