import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { BlogDetailsComponent } from './blog-details.component';

const routes: Route[]=[
    {
    path: '',
    component: BlogDetailsComponent
    }
]

@NgModule({
  declarations: [BlogDetailsComponent],
  exports:[
    BlogDetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class BlogDetailsModule { }
