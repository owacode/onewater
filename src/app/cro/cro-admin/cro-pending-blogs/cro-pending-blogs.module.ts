import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroPendingBlogsComponent } from './cro-pending-blogs.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: CroPendingBlogsComponent
    }
]
@NgModule({
  declarations: [CroPendingBlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CroPendingBlogsModule { }
