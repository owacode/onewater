import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmAllBlogsComponent } from './cm-all-blogs.component';
import { Route, RouterModule } from '@angular/router';
import { CommonPipesModule } from 'src/app/pipes/common-pipes.module';

const routes: Route[]=[
    {
    path: '',
    component: CmAllBlogsComponent
    }
]

@NgModule({
  declarations: [CmAllBlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonPipesModule
  ]
})

export class CmAllBlogsModule { }
