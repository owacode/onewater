import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmApprovedBlogsComponent } from './cm-approved-blogs.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: CmApprovedBlogsComponent
    }
]

@NgModule({
  declarations: [CmApprovedBlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmApprovedBlogsModule { }
