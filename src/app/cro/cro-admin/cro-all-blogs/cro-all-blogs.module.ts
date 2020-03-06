import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroAllBlogsComponent } from './cro-all-blogs.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: CroAllBlogsComponent
    }
]

@NgModule({
  declarations: [CroAllBlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CroAllBlogsModule { }
