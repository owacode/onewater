import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroSavedBlogsComponent } from './cro-saved-blogs.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: CroSavedBlogsComponent
    }
]

@NgModule({
  declarations: [CroSavedBlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class CroSavedBlogsModule { }
