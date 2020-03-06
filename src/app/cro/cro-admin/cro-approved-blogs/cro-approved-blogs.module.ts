import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroApprovedBlogsComponent } from './cro-approved-blogs.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: CroApprovedBlogsComponent
    }
]
@NgModule({
  declarations: [CroApprovedBlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CroApprovedBlogsModule { }
