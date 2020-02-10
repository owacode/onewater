import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: ContactComponent
    }
]

@NgModule({
  declarations: [ContactComponent],
  exports:[
    ContactComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    ]
})

export class ContactModule { }
