import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroPostBlogComponent } from './cro-post-blog.component';
import {QuillModule} from "ngx-quill";
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';

const routes: Route[]=[
    {
    path: '',
    component: CroPostBlogComponent
    }
]

@NgModule({
  declarations: [CroPostBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    EditorModule
  ]
})
export class CroPostBlogModule { }
