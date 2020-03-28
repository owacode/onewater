import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: PrivacyPolicyComponent
    }
]

@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class PrivacyPolicyModule { }
