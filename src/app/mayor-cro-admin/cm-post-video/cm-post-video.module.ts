import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmPostVideoComponent } from './cm-post-video.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: CmPostVideoComponent
    }
]

@NgModule({
  declarations: [CmPostVideoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmPostVideoModule { }
