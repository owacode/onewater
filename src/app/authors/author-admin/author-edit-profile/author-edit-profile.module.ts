import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AuthorEditProfileComponent } from './author-edit-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Route[]=[
    {
    path: '',
    component: AuthorEditProfileComponent
    }
]

@NgModule({
  declarations: [AuthorEditProfileComponent],
  exports:[
    AuthorEditProfileComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthorEditProfileModule { }
