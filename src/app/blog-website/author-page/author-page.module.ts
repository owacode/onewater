import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorPageComponent } from './author-page.component';
import { RouterModule,Route } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: AuthorPageComponent
    }
    ]

@NgModule({
  declarations: [AuthorPageComponent],
  exports:[AuthorPageComponent],
  imports: [
  RouterModule.forChild(routes),
  CommonModule
  ]
})
export class AuthorPageModule { }
