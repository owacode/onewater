import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroAuthorVideosComponent } from './cro-author-videos.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: CroAuthorVideosComponent
    }
]

@NgModule({
  declarations: [CroAuthorVideosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CroAuthorVideosModule { }
