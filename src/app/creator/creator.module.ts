import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CreatorRoutingModule} from './creator-routing.module';
import {CreatorComponent} from './creator.component';
import {CreatorContainerComponent} from './creator-container.component';
import {PreviewComponent} from './preview/preview.component';
import {PreviewContainerComponent} from './preview/preview-container.component';
import {EditorComponent} from './editor/editor.component';
import {EditorContainerComponent} from './editor/editor-container.component';
import {PersonalDetailsComponent} from './editor/personal-details/personal-details.component';
import {PersonalDetailsContainerComponent} from './editor/personal-details/personal-details-container.component';
import {ExperienceComponent} from './editor/experience/component/experience.component';
import {RatingComponent} from './editor/rating/component/rating.component';
import {RatingContainerComponent} from './editor/rating/container/rating-container.component';
import {ExperienceContainerComponent} from './editor/experience/container/experience-container.component';
import {MyFormModule} from '../forms/form-module/my-form.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CreatorComponent, CreatorContainerComponent, PreviewComponent, EditorComponent,
    EditorContainerComponent, PreviewContainerComponent, PersonalDetailsComponent, PersonalDetailsContainerComponent, ExperienceComponent,
    RatingComponent, RatingContainerComponent, ExperienceContainerComponent],
  imports: [
    CommonModule,
    CreatorRoutingModule,
    ReactiveFormsModule,
    MyFormModule
  ]
})
export class CreatorModule {
}
