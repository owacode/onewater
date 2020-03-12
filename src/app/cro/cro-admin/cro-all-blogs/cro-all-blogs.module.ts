import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroAllBlogsComponent } from './cro-all-blogs.component';
import { Route, RouterModule } from '@angular/router';
import { CommonPipesModule } from 'src/app/pipes/common-pipes.module';

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
    RouterModule.forChild(routes),CommonPipesModule
  ]
})
export class CroAllBlogsModule { }
