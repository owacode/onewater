import { Component, OnInit } from '@angular/core';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { InstructorService } from 'src/app/instructors/instructor-admin/instructor.service';
@Component({
  selector: 'app-instructor-page',
  templateUrl: './instructor-page.component.html',
  styleUrls: ['./instructor-page.component.scss']
})
export class InstructorPageComponent implements OnInit {
  toRender = 'signup';
  form:FormGroup;
  public submitted: Boolean = false;
  constructor(public modal: ModalFunctions,public auth: InstructorService) { }

  ngOnInit() {
    this.form = new FormGroup({
      firstname: new FormControl(null, {validators:[Validators.required]}),
      lastname: new FormControl(null, {validators:[Validators.required]}),
      email: new FormControl(null, {validators:[Validators.required,Validators.email]}),
      organization: new FormControl(null, {validators:[Validators.required]}),
      mobile_no: new FormControl(null),
      proposed_course_topic: new FormControl(null, {validators:[Validators.required]}),
      course_type: new FormControl(null, {validators:[Validators.required]}),
      proposed_course_title: new FormControl(null, {validators:[Validators.required]}),
      proposed_desc: new FormControl(null, {validators:[Validators.required]})
    })
  }

  register() {
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.invalid){
      this.modal.hideBtnLoader();
      console.log('invalid reset form');
      return;
    }
    console.log(this.form.value,'after reset');
    this.auth.registerInstructor(this.form.value)
    .subscribe(result=> {
      console.log(result);
      this.modal.hideBtnLoader();
      this.modal.closeModal('#instructorModal');
      this.modal.openModal('#detailsSubmitted');
      this.form.reset();
      this.submitted = false;
    })
  }


}
