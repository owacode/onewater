import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { EmpDetailsComponent } from './emp-details.component';

const routes: Route[]=[
    {
    path: '',
    component: EmpDetailsComponent
    }
]

@NgModule({
  declarations: [EmpDetailsComponent],
  exports:[
    EmpDetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class EmpDetailsModule { }
