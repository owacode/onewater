import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayorPostComponent } from './mayor-post.component';
import { RouterModule,Route } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';

const routes: Route[]=[
  {
  path: '',
  component: MayorPostComponent
  }
]


@NgModule({
  declarations: [MayorPostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
   CommonModule,
   OwlModule,
   JwSocialButtonsModule
  ]
})
export class MayorPostModule { }
