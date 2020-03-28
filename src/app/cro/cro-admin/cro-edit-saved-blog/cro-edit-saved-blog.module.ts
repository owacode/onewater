import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroEditSavedBlogComponent } from './cro-edit-saved-blog.component';
import { Route, RouterModule } from '@angular/router';
import {QuillModule} from "ngx-quill";
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';

const routes: Route[]=[
  {
  path: '',
  component: CroEditSavedBlogComponent
  }
]


@NgModule({
  declarations: [CroEditSavedBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QuillModule.forRoot(),
    FormsModule,
    EditorModule,
    ReactiveFormsModule
  ]
})
export class CroEditSavedBlogModule { }
