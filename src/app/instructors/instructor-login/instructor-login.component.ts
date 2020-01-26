import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { InstructorService } from '../instructor-admin/instructor.service';

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

  closeModal(thismodal) {
    console.log('hit close')
    $(thismodal).css("display", "none");
    $(thismodal).removeClass("show");
    $('.overlay').css("display", "none");
  }

  constructor(public http:HttpClient, public route: Router, public instructorservice: InstructorService) { }
  user;
  loginuser;
  registersubmitted:boolean=false;

  ngOnInit() {
    this.showregform();

    this.user= new FormGroup({
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
      return;
    }
    if(this.user.value.password != this.user.value.cpassword) return alert("Password Not Matched");
    console.log('pass',this.user.value);

    this.http.post('https://onewater-instructor-api.herokuapp.com/addinstructor',this.user.value)
    .subscribe(result=>{
      console.log("User Added", result)
      alert("User Added Successfully");
    })
  }

  login(){
    this.registersubmitted=true;
    console.log(this.loginuser.value);
    if(this.loginuser.invalid){
      return;
    }
    console.log('pass',this.loginuser.value);

    this.http.post<{msg:string, result:any}>('https://onewater-instructor-api.herokuapp.com/login',this.loginuser.value)
    .subscribe(result=>{
      this.instructorservice.userid=result.result.id;
      this.instructorservice.useremail=result.result.email;
      localStorage.setItem('instructor_id',this.instructorservice.userid);
      localStorage.setItem('instructor_email',this.instructorservice.useremail);
      console.log("User Login Successfully", result);
      if(result.result == 'User Email not Verified') return alert("Please Verify Your Email");
      if(!result.result.form_filled) this.route.navigate(['/instructor-reg']);
      else if(result.result.status == 'pending') return alert("Your Profile is not been Approved Yet");
      else this.route.navigate(['/instructor-admin']);
    })
  }

}
