import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleVideoComponent } from './single-video.component';
import { Route, RouterModule } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';

const routes: Route[]=[
    {
    path: '',
    component: SingleVideoComponent
    }
]

@NgModule({
  declarations: [SingleVideoComponent],
  exports:[SingleVideoComponent],
  imports: [
  RouterModule.forChild(routes),
  CommonModule,
  OwlModule,
  JwSocialButtonsModule
  ]
})

export class SingleVideoModule { }
