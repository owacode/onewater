import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { OwlModule } from 'ngx-owl-carousel';
import { CommonPipesModule } from 'src/app/pipes/common-pipes.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'
const routes: Route[]=[
    {
    path: '',
    component: HomeComponent
    }
]

@NgModule({
  declarations: [HomeComponent],
  exports:[HomeComponent],
  imports: [
  RouterModule.forChild(routes),
  CommonModule,
  OwlModule,
  ReactiveFormsModule,
  FormsModule,
  CommonPipesModule
  ]
})

export class HomeModule { }
