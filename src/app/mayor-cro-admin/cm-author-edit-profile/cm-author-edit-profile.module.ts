import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CmAuthorEditProfileComponent } from './cm-author-edit-profile.component';

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
    RouterModule.forChild(routes)
  ]
})

export class CmAuthorEditProfileModule { }
