import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
const routes: Route[]=[
    {
    path: '',
    component: AboutComponent
    }
]

@NgModule({
  declarations: [AboutComponent],
  exports:[
    AboutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    ]
})
export class AboutModule { }
