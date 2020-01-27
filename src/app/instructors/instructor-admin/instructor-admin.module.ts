import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorAdminRoutingModule } from './instructor-admin-routing.module';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component'
import { InstructorAdminComponent } from './instructor-admin.component';
import { UploadContentComponent } from './upload-content/upload-content.component';
import { SubmittedContentComponent } from './submitted-content/submitted-content.component';
import { AboutContentComponent } from './about-content/about-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InstructorDashboardComponent, InstructorAdminComponent, UploadContentComponent, SubmittedContentComponent, AboutContentComponent],
  imports: [
    CommonModule,
    InstructorAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class InstructorAdminModule { }
