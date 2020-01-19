import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationComponent } from './user-registration.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: UserRegistrationComponent
    }
]

@NgModule({
  declarations: [UserRegistrationComponent],
  exports:[
    UserRegistrationComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})

export class UserRegistrationModule { }
