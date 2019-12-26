import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CandidateJobListComponent } from './candidate-job-list.component';

const routes: Route[]=[
    {
    path: '',
    component: CandidateJobListComponent
    }
]

@NgModule({
  declarations: [CandidateJobListComponent],
  exports:[
    CandidateJobListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class CandidateJobListModule { }
