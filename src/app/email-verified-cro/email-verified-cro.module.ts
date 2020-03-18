import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailVerifiedCroComponent } from './email-verified-cro.component';
import { Route, RouterModule, Router } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: EmailVerifiedCroComponent
    }
]

@NgModule({
  declarations: [EmailVerifiedCroComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class EmailVerifiedCroModule { }
