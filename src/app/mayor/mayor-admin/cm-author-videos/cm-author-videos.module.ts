import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmAuthorVideosComponent } from './cm-author-videos.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: CmAuthorVideosComponent
    }
]
@NgModule({
  declarations: [CmAuthorVideosComponent],
  
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmAuthorVideosModule { }
