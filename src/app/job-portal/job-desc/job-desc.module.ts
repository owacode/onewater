import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { JobDescComponent } from './job-desc.component';

const routes: Route[]=[
    {
    path: '',
    component: JobDescComponent
    }
]

@NgModule({
  declarations: [JobDescComponent],
  exports:[
    JobDescComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class JobDescModule { }
