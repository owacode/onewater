import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { JobListComponent } from './job-list.component';
import { OwlModule } from 'ngx-owl-carousel';
import {FormsModule} from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination';
const routes: Route[]=[
    {
    path: '',
    component: JobListComponent
    }
]

@NgModule({
  declarations: [JobListComponent],
  exports:[
    JobListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    OwlModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class JobListModule { }
