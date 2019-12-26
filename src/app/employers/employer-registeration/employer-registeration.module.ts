import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { EmployerRegisterationComponent } from './employer-registeration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
    {
    path: '',
    component: EmployerRegisterationComponent
    }
]

@NgModule({
  declarations: [EmployerRegisterationComponent],
  exports:[
    EmployerRegisterationComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployerRegisterationModule { }
