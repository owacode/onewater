import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AuthorVideosComponent } from './author-videos.component';
import { CommonPipesModule } from 'src/app/pipes/common-pipes.module';

const routes: Route[]=[
    {
    path: '',
    component: AuthorVideosComponent
    }
]

@NgModule({
  declarations: [AuthorVideosComponent],
  exports:[
    AuthorVideosComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CommonPipesModule
  ]
})
export class AuthorVideosModule { }
