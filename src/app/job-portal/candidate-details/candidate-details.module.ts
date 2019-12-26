import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CandidateDetailsComponent } from './candidate-details.component';
import { OwlModule } from 'ngx-owl-carousel';
const routes: Route[]=[
    {
    path: '',
    component: CandidateDetailsComponent
    }
]

@NgModule({
  declarations: [CandidateDetailsComponent],
  exports:[
    CandidateDetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    OwlModule
  ]
})
export class CandidateDetailsModule { }
