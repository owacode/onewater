import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayorPageComponent } from './mayor-page.component';
import { Route, RouterModule } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';

const routes: Route[]=[
    {
    path: '',
    component: MayorPageComponent
    }
]

@NgModule({
  declarations: [MayorPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OwlModule
  ]
})

export class MayorPageModule { }
