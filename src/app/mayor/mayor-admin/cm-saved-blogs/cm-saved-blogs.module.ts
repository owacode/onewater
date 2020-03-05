import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmSavedBlogsComponent } from './cm-saved-blogs.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: CmSavedBlogsComponent
    }
]
@NgModule({
  declarations: [CmSavedBlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CmSavedBlogsModule { }
