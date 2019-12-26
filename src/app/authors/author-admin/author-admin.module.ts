import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorAdminComponent } from './author-admin.component';
import { AuthorAdminRoutingModule } from './author-admin-routing.module';
import {FormsModule} from "@angular/forms";
import { AuthorDashboardComponent } from './author-dashboard/author-dashboard.component';

@NgModule({
  declarations: [AuthorAdminComponent, AuthorDashboardComponent],

  imports: [
    CommonModule,
    AuthorAdminRoutingModule,
    FormsModule
  ],
  exports:[AuthorAdminComponent]
})

export class AuthorAdminModule { }

