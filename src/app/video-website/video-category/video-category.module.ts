import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCategoryComponent } from './video-category.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: VideoCategoryComponent
    }
]

@NgModule({
  declarations: [VideoCategoryComponent],
  exports:[VideoCategoryComponent],
  imports: [
  RouterModule.forChild(routes),
  CommonModule
  ]
})

export class VideoCategoryModule { }
