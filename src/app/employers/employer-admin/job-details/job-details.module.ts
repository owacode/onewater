import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { JobDetailsComponent } from './job-details.component';

const routes: Route[]=[
    {
    path: '',
    component: JobDetailsComponent
    }
]

@NgModule({
  declarations: [JobDetailsComponent],
  exports:[
    JobDetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class JobDetailsModule { }
