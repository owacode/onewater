import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleVideoComponent } from './single-video.component';
import { Route, RouterModule } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { CommonPipesModule } from 'src/app/pipes/common-pipes.module';

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
  JwSocialButtonsModule,
  CommonPipesModule
  ]
})

export class SingleVideoModule { }
