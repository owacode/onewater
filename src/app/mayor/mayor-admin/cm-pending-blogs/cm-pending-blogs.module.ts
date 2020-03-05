import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmPendingBlogsComponent } from './cm-pending-blogs.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: CmPendingBlogsComponent
    }
]

@NgModule({
  declarations: [CmPendingBlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class CmPendingBlogsModule { }
