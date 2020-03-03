import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmPostBlogComponent } from './cm-post-blog.component';
import {QuillModule} from "ngx-quill";
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: CmPostBlogComponent
    }
]

@NgModule({
  declarations: [CmPostBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CmPostBlogModule { }
