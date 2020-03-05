import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroAdminComponent } from './cro-admin.component';
import { CroDashboardComponent } from './cro-dashboard/cro-dashboard.component';
import { CroAdminRoutingModule } from './cro-admin-routing.module';

@NgModule({
  declarations: [CroAdminComponent, CroDashboardComponent],
  imports: [
    CommonModule,
    CroAdminRoutingModule
  ]
})

export class CroAdminModule { }
