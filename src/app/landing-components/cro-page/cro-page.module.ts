import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroPageComponent } from './cro-page.component';
import { Route, RouterModule } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';

const routes: Route[]=[
  {
  path: '',
  component: CroPageComponent
  }
]

@NgModule({
  declarations: [CroPageComponent],
  imports: [
    CommonModule,
    OwlModule,
    RouterModule.forChild(routes)
  ]
})

export class CroPageModule { }
