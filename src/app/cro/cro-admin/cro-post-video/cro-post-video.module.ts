import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroPostVideoComponent } from './cro-post-video.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: CroPostVideoComponent
    }
]

@NgModule({
  declarations: [CroPostVideoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class CroPostVideoModule { }
