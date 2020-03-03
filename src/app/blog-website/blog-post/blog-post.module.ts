import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from './blog-post.component';
import { RouterModule,Route } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { CommonPipesModule } from 'src/app/pipes/common-pipes.module';

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
   JwSocialButtonsModule,
   CommonPipesModule
   ]
   })

   export class BlogPostModule { }
