import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";
import { AllBlogsComponent } from './all-blogs.component';
import { CommonPipesModule } from 'src/app/pipes/common-pipes.module';

const routes: Route[]=[
    {
    path: '',
    component: AllBlogsComponent
    }
]

@NgModule({
  declarations: [AllBlogsComponent],
  exports:[
    AllBlogsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    CommonPipesModule
  ]
})
export class AllBlogsModule { }
