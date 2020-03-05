import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmBlogDetailsComponent } from './cm-blog-details.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: CmBlogDetailsComponent
    }
]

@NgModule({
  declarations: [CmBlogDetailsComponent],
  exports:[
    CmBlogDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class CmBlogDetailsModule { }
