import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleSignupComponent } from './role-signup.component';
import { Route, RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';

const routes: Route[]=[
    {
    path: '',
    component: RoleSignupComponent
    }
]

@NgModule({
  declarations: [RoleSignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule
  ]
})

export class RoleSignupModule { }
