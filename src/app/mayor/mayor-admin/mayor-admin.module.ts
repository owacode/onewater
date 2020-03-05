import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayorAdminComponent } from './mayor-admin.component';
import { CmDashboardComponent } from './cm-dashboard/cm-dashboard.component';
import { MayorAdminRoutingModule } from './mayor-admin-routing.module';

@NgModule({
  declarations: [MayorAdminComponent, CmDashboardComponent],
  imports: [
    CommonModule,
    MayorAdminRoutingModule
  ]
})
export class MayorAdminModule { }

