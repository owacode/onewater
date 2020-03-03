import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroRegistrationComponent } from './cro-registration.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterModule } from 'src/app/footer/footer.module';

const routes: Route[]=[
    {
    path: '',
    component: CroRegistrationComponent
    }
]

@NgModule({
  declarations: [CroRegistrationComponent],
  imports: [
    CommonModule,
    FooterModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})

export class CroRegistrationModule { }
