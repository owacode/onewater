import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedBlogsComponent } from './saved-blogs.component';
import { Route, RouterModule } from '@angular/router';
import { CommonPipesModule } from 'src/app/pipes/common-pipes.module';

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
    CommonPipesModule,
    RouterModule.forChild(routes)
  ]
})
export class SavedBlogsModule { }
