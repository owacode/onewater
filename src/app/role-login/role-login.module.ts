import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleLoginComponent } from './role-login.component';
import { Route, RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';

const routes: Route[]=[
    {
    path: '',
    component: RoleLoginComponent
    }
]

@NgModule({
  declarations: [RoleLoginComponent],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild(routes)
  ]
})
export class RoleLoginModule { }
