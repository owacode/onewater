import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditJobComponent } from './edit-job.component';

const routes: Route[]=[
    {
    path: '',
    component: EditJobComponent
    }
]

@NgModule({
  declarations: [EditJobComponent],
  exports:[
    EditJobComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditJobModule { }
