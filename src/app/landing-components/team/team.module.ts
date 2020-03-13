import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { TeamComponent } from './team.component';
import { LightboxModule } from 'ngx-lightbox';

const routes: Route[]=[
    {
    path: '',
    component: TeamComponent
    }
]

@NgModule({
  declarations: [TeamComponent],
  exports:[
    TeamComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LightboxModule 
    ]
})
export class TeamModule { }
