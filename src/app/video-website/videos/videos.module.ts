import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos.component';
import { Route, RouterModule } from '@angular/router';
import { NgxMasonryModule } from 'ngx-masonry';
const routes: Route[]=[
    {
    path: '',
    component: VideosComponent
    }
]

@NgModule({
  declarations: [VideosComponent],
  exports:[VideosComponent],
  imports: [
  RouterModule.forChild(routes),
  CommonModule,
  NgxMasonryModule
  ]
})

export class VideosModule { }
