import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PostVideoComponent } from './post-video.component';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
    {
    path: '',
    component: PostVideoComponent
    }
]

@NgModule({
  declarations: [PostVideoComponent],
  exports:[
    PostVideoComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PostVideoModule { }
