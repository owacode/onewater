import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroAuthorEditProfileComponent } from './cro-author-edit-profile.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
    {
    path: '',
    component: CroAuthorEditProfileComponent
    }
]

@NgModule({
  declarations: [CroAuthorEditProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})

export class CroAuthorEditProfileModule { }
