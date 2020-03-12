import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmApprovedBlogsComponent } from './cm-approved-blogs.component';
import { Route, RouterModule } from '@angular/router';
import { CommonPipesModule } from 'src/app/pipes/common-pipes.module';

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
    RouterModule.forChild(routes),
    CommonPipesModule
  ]
})
export class CmApprovedBlogsModule { }
