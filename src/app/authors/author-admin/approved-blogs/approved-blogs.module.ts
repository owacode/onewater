import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";
import { ApprovedBlogsComponent } from './approved-blogs.component';
import { CommonPipesModule } from 'src/app/pipes/common-pipes.module';

const routes: Route[]=[
    {
    path: '',
    component: ApprovedBlogsComponent
    }
]

@NgModule({
  declarations: [ApprovedBlogsComponent],
  exports:[
    ApprovedBlogsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    CommonPipesModule
  ]
})
export class ApprovedBlogsModule { }
