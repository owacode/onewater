import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { EmailVerfiedInstructorComponent } from './email-verfied-instructor.component';

const routes: Route[]=[
    {
    path: '',
    component: EmailVerfiedInstructorComponent
    }
]

@NgModule({
  declarations: [EmailVerfiedInstructorComponent],
  exports:[EmailVerfiedInstructorComponent],
  imports: [
  RouterModule.forChild(routes),
  CommonModule
  ]
})
export class EmailVerfiedInstructorModule { }
