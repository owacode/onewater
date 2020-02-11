import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { InstructorLoginChildComponent } from './instructor-login-child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
    {
    path: '',
    component: InstructorLoginChildComponent
    }
]

@NgModule({
  declarations: [InstructorLoginChildComponent],
  exports:[
    InstructorLoginChildComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class InstructorLoginChildModule { }
