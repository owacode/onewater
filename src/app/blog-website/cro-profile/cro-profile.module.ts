import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroProfileComponent } from './cro-profile.component';
import { RouterModule,Route } from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: CroProfileComponent
  }
]

@NgModule({
  declarations: [CroProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class CroProfileModule { }
