import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayorPostComponent } from './mayor-post.component';
import { RouterModule,Route } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { CommonPipesModule } from 'src/app/pipes/common-pipes.module';

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
   JwSocialButtonsModule,
   CommonPipesModule
  ]
})
export class MayorPostModule { }
