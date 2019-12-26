import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatesComponent } from './candidates.component';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: CandidatesComponent,
    children:[
      
      { path: '', component:CandidateDashboardComponent },
      { path: 'job-details', loadChildren: '../employers/employer-admin/job-details/job-details.module#JobDetailsModule' },
      { path: 'emp-details', loadChildren: './emp-details/emp-details.module#EmpDetailsModule' },
      { path: 'job-list', loadChildren: './candidate-job-list/candidate-job-list.module#CandidateJobListModule' },
      { path: 'edit-profile', loadChildren: './candidate-edit-profile/candidate-edit-profile.module#CandidateEditProfileModule' },
      { path: 'candidate-reg', loadChildren: './candidate-registeration/candidate-registeration.module#CandidateRegisterationModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesRoutingModule { }
