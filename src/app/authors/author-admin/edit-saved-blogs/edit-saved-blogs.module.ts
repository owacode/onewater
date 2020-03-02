import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditSavedBlogsComponent } from './edit-saved-blogs.component';
import { Route, RouterModule } from '@angular/router';
import {QuillModule} from "ngx-quill";
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
    {
    path: '',
    component: EditSavedBlogsComponent
    }
]
@NgModule({
  declarations: [EditSavedBlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ]
})

export class EditSavedBlogsModule { }
