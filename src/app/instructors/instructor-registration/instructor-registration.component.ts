import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { InstructorService } from '../instructor-admin/instructor.service';
import { ModalFunctions } from '../../shared-functions/modal-functions';

@Component({
  selector: 'app-instructor-registration',
  templateUrl: './instructor-registration.component.html',
  styleUrls: ['./instructor-registration.component.scss']
})
export class InstructorRegistrationComponent implements OnInit {

  constructor(public http: HttpClient, public instructorservice:InstructorService, public modal : ModalFunctions) { }
  user_registration;
  submited:Boolean=false;

  ngOnInit() {
    this.user_registration= new FormGroup({
      instructorid:new FormControl(null),
      mobile_no:new FormControl(null,{validators:[Validators.required]}),
      nationality:new FormControl(null,{validators:[Validators.required]}),
      profession:new FormControl(null,{validators:[Validators.required]}),
      linkedIn:new FormControl(null,{validators:[Validators.required]})
    });
  }

  register(){
    this.submited=true;
    this.user_registration.value.instructorid = this.instructorservice.userid;
    console.log(this.user_registration.value);
    if(this.user_registration.invalid){
      console.log(this.user_registration);
      console.log("error")
      this.modal.hideBtnLoader();
      return;
    }

    console.log('pass',this.user_registration.value);
    this.http.post('https://onewater-instructor-api.herokuapp.com/updateinstructor',this.user_registration.value)
    .subscribe(result=>{
      console.log("User Details Updated", result);
      this.modal.hideBtnLoader();
      this.modal.openModal("#registerModal");
    })
  }
  
  logout(){
    this.instructorservice.logout();
  }

}
