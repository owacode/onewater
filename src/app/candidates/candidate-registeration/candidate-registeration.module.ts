import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CandidateRegisterationComponent } from './candidate-registeration.component';

const routes: Route[]=[
    {
    path: '',
    component: CandidateRegisterationComponent
    }
]

@NgModule({
  declarations: [CandidateRegisterationComponent],
  exports:[
    CandidateRegisterationComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class CandidateRegisterationModule { }
