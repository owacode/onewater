import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { EmailVerifiedLeaderComponent } from './email-verified-leader.component';
const routes: Route[]=[
    {
    path: '',
    component: EmailVerifiedLeaderComponent
    }
]

@NgModule({
  declarations: [EmailVerifiedLeaderComponent],
  exports:[EmailVerifiedLeaderComponent],
  imports: [
  RouterModule.forChild(routes),
  CommonModule
  ]
})
export class EmailVerifiedLeaderModule { }
