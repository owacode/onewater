import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AuthorLoginComponent } from './author-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
    {
    path: '',
    component: AuthorLoginComponent
    }
]

@NgModule({
  declarations: [AuthorLoginComponent],
  exports:[
    AuthorLoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthorLoginModule { }
