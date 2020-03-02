import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayorLoginComponent } from './mayor-login.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
    {
    path: '',
    component: MayorLoginComponent
    }
]

@NgModule({
  declarations: [MayorLoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})

export class MayorLoginModule { }
