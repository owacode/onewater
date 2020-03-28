import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadersComponent } from './leaders.component';
import { Route, RouterModule } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { CommonPipesModule } from 'src/app/pipes/common-pipes.module';

const routes: Route[]=[
    {
    path: '',
    component: LeadersComponent
    }
]
@NgModule({
  declarations: [LeadersComponent],
  imports: [
    CommonModule,
    OwlModule,
    RouterModule.forChild(routes),
    CommonPipesModule
  ]
})

export class LeadersModule { }
