import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleSignupComponent } from './role-signup.component';
import { Route, RouterModule } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})

export class RoleSignupModule { }
