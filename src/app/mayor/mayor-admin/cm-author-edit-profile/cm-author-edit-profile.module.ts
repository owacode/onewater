import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CmAuthorEditProfileComponent } from './cm-author-edit-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
    {
    path: '',
    component: CmAuthorEditProfileComponent
    }
]

@NgModule({
  declarations: [CmAuthorEditProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})

export class CmAuthorEditProfileModule { }
