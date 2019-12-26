import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from './blog-post.component';
import { RouterModule,Route } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';

const routes: Route[]=[
    {
    path: '',
    component: BlogPostComponent
    }
]

   @NgModule({
   declarations: [BlogPostComponent],
   exports: [BlogPostComponent],
   imports: [
   RouterModule.forChild(routes),
   CommonModule,
   OwlModule,
   JwSocialButtonsModule
   ]
   })

   export class BlogPostModule { }
