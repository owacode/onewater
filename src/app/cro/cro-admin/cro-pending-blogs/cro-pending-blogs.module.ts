import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroPendingBlogsComponent } from './cro-pending-blogs.component';
import { Route, RouterModule } from '@angular/router';
import { CommonPipesModule } from 'src/app/pipes/common-pipes.module';

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
    RouterModule.forChild(routes),CommonPipesModule
  ]
})
export class CroPendingBlogsModule { }
