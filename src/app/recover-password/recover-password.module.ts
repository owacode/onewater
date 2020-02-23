import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecoverPasswordComponent } from './recover-password.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
    {
    path: '',
    component: RecoverPasswordComponent
    }
]

@NgModule({
  declarations: [RecoverPasswordComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[RecoverPasswordComponent]
})

export class RecoverPasswordModule { }
