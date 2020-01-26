import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { InstructorLoginComponent } from './instructor-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Route[]=[
    {
    path: '',
    component: InstructorLoginComponent
    }
]

@NgModule({
  declarations: [InstructorLoginComponent],
  exports:[
    InstructorLoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InstructorLoginModule { }
