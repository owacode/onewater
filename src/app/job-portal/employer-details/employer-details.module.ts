import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { EmployerDetailsComponent } from './employer-details.component';
import { OwlModule } from 'ngx-owl-carousel';
const routes: Route[]=[
    {
    path: '',
    component: EmployerDetailsComponent
    }
]

@NgModule({
  declarations: [EmployerDetailsComponent],
  exports:[
    EmployerDetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    OwlModule
  ]
})
export class EmployerDetailsModule { }
