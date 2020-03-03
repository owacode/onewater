import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayorRegistrationComponent } from './mayor-registration.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterModule } from 'src/app/footer/footer.module';

const routes: Route[]=[
    {
    path: '',
    component: MayorRegistrationComponent
    }
]


@NgModule({
  declarations: [MayorRegistrationComponent],
  imports: [
    CommonModule,
    FooterModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class MayorRegistrationModule { }
