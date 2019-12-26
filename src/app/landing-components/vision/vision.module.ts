import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { VisionComponent } from './vision.component';

const routes: Route[]=[
    {
    path: '',
    component: VisionComponent
    }
]

@NgModule({
  declarations: [VisionComponent],
  exports:[
    VisionComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    ]
})
export class VisionModule { }
