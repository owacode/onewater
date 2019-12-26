import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { JobHomeComponent } from './job-home.component';
import { OwlModule } from 'ngx-owl-carousel';
const routes: Route[]=[
    {
    path: '',
    component: JobHomeComponent
    }
]

@NgModule({
  declarations: [JobHomeComponent],
  exports:[
    JobHomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    OwlModule
  ]
})
export class JobHomeModule { }
