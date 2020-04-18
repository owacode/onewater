import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import * as $ from 'jquery';
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
  public submitted: Boolean = false;
  constructor(public http:HttpClient, public modal: ModalFunctions, public auth: InstructorService) { }

  ngOnInit() {
    this.form = new FormGroup({
      firstname: new FormControl(null, {validators:[Validators.required]}),
      lastname: new FormControl(null, {validators:[Validators.required]}),
      email: new FormControl(null, {validators:[Validators.required]}),
      organization: new FormControl(null, {validators:[Validators.required]}),
      mobile_no: new FormControl(null, {validators:[Validators.required]}),
      proposed_course_topic: new FormControl(null, {validators:[Validators.required]}),
      course_type: new FormControl(null, {validators:[Validators.required]}),
      proposed_course_title: new FormControl(null, {validators:[Validators.required]}),
      proposed_desc: new FormControl(null, {validators:[Validators.required]})
    })
    if(localStorage.getItem("triggerBlogModal") == "false"){
      this.modal.openModal("#blogModal");
      localStorage.removeItem("triggerBlogModal");
    }
    Feather.replace();

  }

  register() {
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.invalid){
      console.log('invalid reset form');
      this.modal.hideBtnLoader();
      return;
    }
    console.log(this.form.value,'after reset');
    this.auth.registerInstructor(this.form.value)
    .subscribe(result=> {
      console.log(result);
      this.modal.hideBtnLoader();
    })
  }

}
