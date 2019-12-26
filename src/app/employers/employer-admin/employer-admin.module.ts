import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerAdminComponent } from './employer-admin.component';
import { EmployerAdminRoutingModule } from './employer-admin-routing.module';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';

@NgModule({
  declarations: [EmployerDashboardComponent,EmployerAdminComponent],

  imports: [
    CommonModule,
    EmployerAdminRoutingModule
  ],
  exports:[EmployerDashboardComponent,EmployerAdminComponent]
})

export class EmployerAdminModule { }
