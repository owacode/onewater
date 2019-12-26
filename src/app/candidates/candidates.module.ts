import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { CandidatesComponent } from './candidates.component';

@NgModule({
  declarations: [CandidateDashboardComponent, CandidatesComponent],

  imports: [
    CommonModule,
    CandidatesRoutingModule
  ],
  exports:[]
})

export class CandidatesModule { }
