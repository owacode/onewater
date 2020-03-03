import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayorProfileComponent } from './mayor-profile.component';
import { RouterModule,Route } from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: MayorProfileComponent
  }
]

@NgModule({
  declarations: [MayorProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class MayorProfileModule { }
