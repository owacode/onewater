import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";
import { PendingBlogsComponent } from './pending-blogs.component';
import { CommonPipesModule } from 'src/app/pipes/common-pipes.module';

const routes: Route[]=[
    {
    path: '',
    component: PendingBlogsComponent
    }
]

@NgModule({
  declarations: [PendingBlogsComponent],
  exports:[
    PendingBlogsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    CommonPipesModule
  ]
})
export class PendingBlogsModule { }
