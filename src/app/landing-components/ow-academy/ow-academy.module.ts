import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { OwAcademyComponent } from './ow-academy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
    {
    path: '',
    component: OwAcademyComponent
    }
]

@NgModule({
  declarations: [OwAcademyComponent],
  exports:[
    OwAcademyComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule
    ]
})
export class OwAcademyModule { }
