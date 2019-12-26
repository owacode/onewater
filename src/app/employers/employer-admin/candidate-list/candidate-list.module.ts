import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CandidateListComponent } from './candidate-list.component';

const routes: Route[]=[
    {
    path: '',
    component: CandidateListComponent
    }
]

@NgModule({
  declarations: [CandidateListComponent],
  exports:[
    CandidateListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class CandidateListModule { }
