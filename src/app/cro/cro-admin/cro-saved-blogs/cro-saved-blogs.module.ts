import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroSavedBlogsComponent } from './cro-saved-blogs.component';
import { Route, RouterModule } from '@angular/router';
import { CommonPipesModule } from 'src/app/pipes/common-pipes.module';

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
    RouterModule.forChild(routes),CommonPipesModule
  ]
})

export class CroSavedBlogsModule { }
