import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';
import { InstructorService } from 'src/app/instructors/instructor-admin/instructor.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  toRender='signup';

  form:FormGroup;
 
  constructor(public http:HttpClient, public modal: ModalFunctions, public auth: InstructorService) { }

  ngOnInit() {
    Feather.replace();
  }

}
