import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MissionComponent } from './mission.component';

const routes: Route[]=[
    {
    path: '',
    component: MissionComponent
    }
]

@NgModule({
  declarations: [MissionComponent],
  exports:[
    MissionComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
    ]
})
export class MissionModule { }
