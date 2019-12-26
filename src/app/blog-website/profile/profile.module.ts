import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule,Route } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: ProfileComponent
    }
    ]

@NgModule({
  declarations: [ProfileComponent],
  exports:[ProfileComponent],
  imports: [
  RouterModule.forChild(routes),
  CommonModule
  ]
})
export class ProfileModule { }
