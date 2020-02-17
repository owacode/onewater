import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { InstructorService } from '../instructor-admin/instructor.service';
import { ModalFunctions } from '../../shared-functions/modal-functions';

@Component({
  selector: 'app-instructor-login',
  templateUrl: './instructor-login.component.html',
  styleUrls: ['./instructor-login.component.scss']
})

export class InstructorLoginComponent implements OnInit {

  showregform() {
    document.querySelector(".vldauth")['style'].display = "none";
    document.querySelector(".vldreg")['style'].display = "flex";
    document.getElementById("login-text")['style'].display = "none"
    document.getElementById("signup-text")['style'].display = "block"
  }

  showauthform() {
    document.querySelector(".vldauth")['style'].display = "flex";
    document.querySelector(".vldreg")['style'].display = "none";
    document.getElementById("login-text")['style'].display = "block"
    document.getElementById("signup-text")['style'].display = "none"
  }

  constructor(public http:HttpClient, public route: Router, public instructorservice: InstructorService, public modal : ModalFunctions) { }
  user;
  loginuser;
  registersubmitted:boolean=false;

  ngOnInit() {
    this.showregform();
    this.user = new FormGroup({
      name:new FormControl(null,{validators:[Validators.required]}),
      email:new FormControl(null,{validators:[Validators.required,Validators.email]}),
      password:new FormControl(null,{validators:[Validators.required, Validators.minLength(6)]}),
      cpassword:new FormControl(null,{validators:[Validators.required]})
    });

    this.loginuser= new FormGroup({
      email:new FormControl(null,{validators:[Validators.required,Validators.email]}),
      password:new FormControl(null,{validators:[Validators.required, Validators.minLength(6)]}),
    });
  }

  register(){
    this.registersubmitted=true;
    console.log(this.user.value);
    if(this.user.invalid){
      console.log("details invalid")
      this.modal.hideBtnLoader();
      return;
    }

    if(this.user.value.password != this.user.value.cpassword)
    {
      return alert("Password Not Matched");
    }

    console.log('pass',this.user.value);

    this.http.post('https://onewater-instructor-api.herokuapp.com/addinstructor',this.user.value)
    .subscribe(result=>{
      if(result['status'] == "error"){
        console.log("User already exist", result)
        this.modal.hideBtnLoader();
        this.modal.openModal("#signupFail");
      }
      else if (result['status'] == "success"){
        console.log("User Added succssfully", result);
        this.modal.hideBtnLoader();
        this.modal.openModal("#signupSuccess");
      }
    })
  }

  login(){

    this.registersubmitted=true;
    console.log(this.loginuser.value);
    if(this.loginuser.invalid){
      console.log("invalid details");
      this.modal.openModal("#invalidModal");
        this.modal.hideBtnLoader();
      return;
    }
    //console.log('pass',this.loginuser.value);

    this.http.post<{msg:string, result:any}>('https://onewater-instructor-api.herokuapp.com/login',this.loginuser.value)
    .subscribe(result=>{
      this.instructorservice.userid=result.result.id;
      this.instructorservice.useremail=result.result.email;
      localStorage.setItem('instructor_id',this.instructorservice.userid);
      localStorage.setItem('instructor_email',this.instructorservice.useremail);
      console.log("User Login Successfully", result);

      if(result.result == 'Incorrect Password') {
        this.modal.hideBtnLoader();
        this.modal.openModal("#invalidModal");
        return;
      }

      if(result.result == 'User Email not Verified') {
        console.log("email not verified")
        this.modal.hideBtnLoader();
        this.modal.openModal("#loginModal");
        return;
      };

      if(!result.result.form_filled)
      this.route.navigate(['/instructor-reg']);

      else if(result.result.status == 'pending')
      {
        console.log("waiting to be approved by admin");
        this.modal.hideBtnLoader();
        this.modal.openModal("#pendingModal");
        return;
      }

      else
      this.route.navigate(['/instructor-admin']);
    })
  }

}

