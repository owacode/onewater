import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBlogpostComponent } from './admin-blogpost.component';
import { RouterModule,Route } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';

const routes: Route[]=[
    {
    path: '',
    component: AdminBlogpostComponent
    }
]

   @NgModule({
   declarations: [AdminBlogpostComponent],
   exports: [AdminBlogpostComponent],
   imports: [
   RouterModule.forChild(routes),
   CommonModule,
   OwlModule,
   JwSocialButtonsModule
   ]
   })

export class AdminBlogpostModule { }
