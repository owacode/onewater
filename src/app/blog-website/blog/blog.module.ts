import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { RouterModule,Route } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { NgxMasonryModule } from 'ngx-masonry';

const routes: Route[]=[
    {
    path: '',
    component: BlogComponent
    }
  ]

   @NgModule({
   declarations: [BlogComponent],
   exports: [BlogComponent],
   imports: [
   RouterModule.forChild(routes),
   OwlModule,
   NgxMasonryModule,
   CommonModule
   ]
   })
export class BlogModule { }
