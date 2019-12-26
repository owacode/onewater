import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { RouterModule,Route } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: CategoryComponent
    }
    ]

@NgModule({
  declarations: [CategoryComponent],
  exports:[CategoryComponent],
  imports: [
  RouterModule.forChild(routes),
  CommonModule
  ]
})
export class CategoryModule { }
