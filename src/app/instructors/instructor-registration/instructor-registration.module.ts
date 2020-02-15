import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorRegistrationComponent } from './instructor-registration.component';
import { Route, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterModule } from 'src/app/footer/footer.module';

const routes: Route[]=[
    {
    path: '',
    component: InstructorRegistrationComponent
    }
]

@NgModule({
  declarations: [InstructorRegistrationComponent],
  exports:[
    InstructorRegistrationComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FooterModule
  ]
})
export class InstructorRegistrationModule { }
