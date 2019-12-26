import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { EmailVerifiedAuthorComponent } from './email-verified-author.component';
const routes: Route[]=[
    {
    path: '',
    component: EmailVerifiedAuthorComponent
    }
]

@NgModule({
  declarations: [EmailVerifiedAuthorComponent],
  exports:[EmailVerifiedAuthorComponent],
  imports: [
  RouterModule.forChild(routes),
  CommonModule
  ]
})
export class EmailVerifiedAuthorModule { }
