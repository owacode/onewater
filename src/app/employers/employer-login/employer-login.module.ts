import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { EmployerLoginComponent } from './employer-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
    {
    path: '',
    component: EmployerLoginComponent
    }
]

@NgModule({
  declarations: [EmployerLoginComponent],
  exports:[
    EmployerLoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployerLoginModule { }
