import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { EmailVerifiedEmployerComponent } from './email-verified-employer.component';
const routes: Route[]=[
    {
    path: '',
    component: EmailVerifiedEmployerComponent
    }
]

@NgModule({
  declarations: [EmailVerifiedEmployerComponent],
  exports:[EmailVerifiedEmployerComponent],
  imports: [
  RouterModule.forChild(routes),
  CommonModule
  ]
})
export class EmailVerifiedEmployerModule { }
