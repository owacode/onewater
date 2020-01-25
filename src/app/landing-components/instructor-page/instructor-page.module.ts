import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorPageComponent } from './instructor-page.component';
import { Route, RouterModule } from '@angular/router';
const routes: Route[]=[
    {
    path: '',
    component: InstructorPageComponent
    }
]

@NgModule({
  declarations: [InstructorPageComponent],
  exports:[
    InstructorPageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    ]
})
export class InstructorPageModule { }
