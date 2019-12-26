import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CanDetailsComponent } from './can-details.component';

const routes: Route[]=[
    {
    path: '',
    component: CanDetailsComponent
    }
]

@NgModule({
  declarations: [CanDetailsComponent],
  exports:[
    CanDetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class CanDetailsModule { }
