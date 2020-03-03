import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayorCroAdminComponent } from './mayor-cro-admin.component';
import { CmDashboardComponent } from './cm-dashboard/cm-dashboard.component';
import { MayorCroAdminRoutingModule } from './mayor-cro-admin-routing.module';

@NgModule({
  declarations: [MayorCroAdminComponent, CmDashboardComponent],
  imports: [
    CommonModule,
    MayorCroAdminRoutingModule
  ]
})
export class MayorCroAdminModule { }
