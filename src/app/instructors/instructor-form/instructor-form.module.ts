import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorFormComponent } from './instructor-form.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from 'src/app/header/header.module';
import { FooterModule } from 'src/app/footer/footer.module';

const routes: Route[]=[
  {
  path: '',
  component: InstructorFormComponent
  }
]

@NgModule({
  declarations: [InstructorFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild(routes)
  ]
})
export class InstructorFormModule { }
