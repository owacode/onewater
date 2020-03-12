import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmPendingBlogsComponent } from './cm-pending-blogs.component';
import { Route, RouterModule } from '@angular/router';
import { CommonPipesModule } from 'src/app/pipes/common-pipes.module';

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
    RouterModule.forChild(routes),
    CommonPipesModule
  ]
})

export class CmPendingBlogsModule { }
