import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { InstructorService } from '../instructor-admin/instructor.service';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';

@Component({
  selector: 'app-instructor-form',
  templateUrl: './instructor-form.component.html',
  styleUrls: ['./instructor-form.component.scss']
})
export class InstructorFormComponent implements OnInit {
  public submitted: Boolean = false;
  form:FormGroup;
  

  constructor(public http:HttpClient, public modal: ModalFunctions, public auth: InstructorService) { }

  ngOnInit() {
    this.form = new FormGroup({
      firstname: new FormControl(null, {validators:[Validators.required]}),
      lastname: new FormControl(null, {validators:[Validators.required]}),
      email: new FormControl(null, {validators:[Validators.required,Validators.email]}),
      organization: new FormControl(null, {validators:[Validators.required]}),
      mobile_no: new FormControl(null),
      proposed_course_topic: new FormControl(null),
      category: new FormControl(''),
      course_type: new FormControl(null, {validators:[Validators.required]}),
      proposed_course_title: new FormControl(null, {validators:[Validators.required]}),
      proposed_desc: new FormControl(null, {validators:[Validators.required]})
    })

    Feather.replace();
  }

  register() {
    this.submitted = true;
    //console.log(this.form.value);
    if(this.form.invalid){
      this.modal.hideBtnLoader();
      //console.log('invalid reset form');
      return;
    }
    //console.log(this.form.value,'after reset');
    this.auth.registerInstructor(this.form.value)
    .subscribe(result=> {
      //console.log(result);
      this.modal.hideBtnLoader();
      this.modal.openModal('#detailsSubmitted');
      this.form.reset();
      this.submitted = false;
    })
  }

}
