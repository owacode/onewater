import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructorAdminComponent } from './instructor-admin.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { UploadContentComponent } from './upload-content/upload-content.component';
import { SubmittedContentComponent } from './submitted-content/submitted-content.component';
import { AboutContentComponent } from './about-content/about-content.component';

const routes: Routes = [
  {
    path: '',
    component: InstructorAdminComponent,
    children: [
      { path: '', component: UploadContentComponent },
      { path: 'platforms' , component: InstructorDashboardComponent},
      { path: 'past-submissions' , component: SubmittedContentComponent},
      { path: 'content/:id' , component: AboutContentComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InstructorAdminRoutingModule { }
