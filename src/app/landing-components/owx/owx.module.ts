import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { OwxComponent } from './owx.component';

const routes: Route[]=[
    {
    path: '',
    component: OwxComponent
    }
]

@NgModule({
  declarations: [OwxComponent],
  exports:[
    OwxComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    ]
})
export class OwxModule { }
