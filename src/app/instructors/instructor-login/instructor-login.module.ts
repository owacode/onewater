import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { InstructorLoginComponent } from './instructor-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';

const routes: Route[]=[
  {
  path: '',
  component: InstructorLoginComponent
  }
]

@NgModule({
  declarations: [InstructorLoginComponent],
  exports:[
    InstructorLoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule
  ]
})

export class InstructorLoginModule { }
