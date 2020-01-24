import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { InstructorDashboardComponent } from './instructor-dashboard.component';

const routes: Route[]=[
  {
  path: '',
  component: InstructorDashboardComponent
  }
]

@NgModule({
declarations: [InstructorDashboardComponent],
exports:[
  InstructorDashboardComponent
],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class InstructorDashboardModule { }
