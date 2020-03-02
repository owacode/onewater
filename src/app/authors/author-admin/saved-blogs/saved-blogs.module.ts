import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedBlogsComponent } from './saved-blogs.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: SavedBlogsComponent
    }
]

@NgModule({
  declarations: [SavedBlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SavedBlogsModule { }
