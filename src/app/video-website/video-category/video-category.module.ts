import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCategoryComponent } from './video-category.component';
import { Route, RouterModule } from '@angular/router';
import { CommonPipesModule } from 'src/app/pipes/common-pipes.module';

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
  CommonModule,
  CommonPipesModule
  ]
})

export class VideoCategoryModule { }
