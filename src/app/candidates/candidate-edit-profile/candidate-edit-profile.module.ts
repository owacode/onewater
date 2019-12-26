import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CandidateEditProfileComponent } from './candidate-edit-profile.component';

const routes: Route[]=[
    {
    path: '',
    component: CandidateEditProfileComponent
    }
]

@NgModule({
  declarations: [CandidateEditProfileComponent],
  exports:[
    CandidateEditProfileComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class CandidateEditProfileModule { }
