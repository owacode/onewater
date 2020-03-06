import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroBlogDetailsComponent } from './cro-blog-details.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: CroBlogDetailsComponent
    }
]

@NgModule({
  declarations: [CroBlogDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CroBlogDetailsModule { }
