import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployerAdminComponent } from './employer-admin.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: EmployerAdminComponent,
    children: [
      { path: '', component: EmployerDashboardComponent },
      { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfileModule' },
      { path: 'edit-job/:id', loadChildren: './edit-job/edit-job.module#EditJobModule' },
      { path: 'job-post', loadChildren: './job-post/job-post.module#JobPostModule' },
      { path: 'job-list', loadChildren: './job-list/job-list.module#JobListModule' },
      { path: 'candidate-list', loadChildren: './candidate-list/candidate-list.module#CandidateListModule' },
      { path: 'job-details/:id', loadChildren: './job-details/job-details.module#JobDetailsModule' },
      { path: 'candidate-details', loadChildren: './can-details/can-details.module#CanDetailsModule' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerAdminRoutingModule { }
