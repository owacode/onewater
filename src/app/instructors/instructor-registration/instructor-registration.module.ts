import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorRegistrationComponent } from './instructor-registration.component';
import { Route, RouterModule } from '@angular/router';


const routes: Route[]=[
    {
    path: '',
    component: InstructorRegistrationComponent
    }
]

@NgModule({
  declarations: [InstructorRegistrationComponent],
  exports:[
    InstructorRegistrationComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class InstructorRegistrationModule { }
