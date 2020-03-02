import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroLoginComponent } from './cro-login.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
    {
    path: '',
    component: CroLoginComponent
    }
]
@NgModule({
  declarations: [CroLoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule 
  ]
})
export class CroLoginModule { }
