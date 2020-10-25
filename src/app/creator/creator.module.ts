import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CreatorRoutingModule} from './creator-routing.module';
import {CreatorComponent} from './component/creator.component';
import {CreatorContainerComponent} from './container/creator-container.component';
import {PreviewComponent} from './preview/component/preview.component';
import {PreviewContainerComponent} from './preview/container/preview-container.component';
import {EditorComponent} from './editor/component/editor.component';
import {EditorContainerComponent} from './editor/container/editor-container.component';
import { PersonalDetailsComponent } from './editor/personal-details/component/personal-details.component';
import { PersonalDetailsContainerComponent } from './editor/personal-details/container/personal-details-container.component';
import { ExperienceComponent } from './editor/experience/component/experience.component';
import { RatingComponent } from './editor/rating/component/rating.component';
import { RatingContainerComponent } from './editor/rating/container/rating-container.component';
import { ExperienceContainerComponent } from './editor/experience/container/experience-container.component';


@NgModule({
  declarations: [CreatorComponent, CreatorContainerComponent, PreviewComponent, EditorComponent,
    EditorContainerComponent, PreviewContainerComponent, PersonalDetailsComponent, PersonalDetailsContainerComponent, ExperienceComponent, RatingComponent, RatingContainerComponent, ExperienceContainerComponent],
  imports: [
    CommonModule,
    CreatorRoutingModule
  ]
})
export class CreatorModule {
}
