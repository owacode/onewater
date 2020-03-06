import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroEditSavedBlogComponent } from './cro-edit-saved-blog.component';
import { Route, RouterModule } from '@angular/router';
import {QuillModule} from "ngx-quill";
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule
  ]
})
export class CroEditSavedBlogModule { }
