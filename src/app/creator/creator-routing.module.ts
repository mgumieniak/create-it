import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreatorContainerComponent} from './container/creator-container.component';

const routes: Routes = [{path: '', component: CreatorContainerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorRoutingModule {
}
