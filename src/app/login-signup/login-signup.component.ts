import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {

  constructor(public http:HttpClient) { }
  user;

  closeModal(thismodal) {
    console.log('close Modal')
    $(thismodal).css("display", "none");
    $(thismodal).removeClass("show");
    $('.overlay').css("display", "none");
  }
  
  ngOnInit() {
    this.user= new FormGroup({
      name:new FormControl(null,{validators:[Validators.required]}),
      email:new FormControl(null,{validators:[Validators.required,Validators.email]}),
      password:new FormControl(null,{validators:[Validators.required, Validators.minLength(6)]}),
      cpassword:new FormControl(null,{validators:[Validators.required]})
    });
  }

  registersubmitted:boolean=false;
  
  register(){
    this.registersubmitted=true;
    console.log(this.user.value);
    if(this.user.invalid){
      return;
    }
    if(this.user.value.password != this.user.value.cpassword) return alert("Password Not Matched");
    console.log('pass',this.user.value);

    this.http.post<{status:any,payload:any}>('https://onewater-auth.herokuapp.com/newuser',this.user.value)
    .subscribe(result=>{
      if(result.status == "error"){
        console.log("user already exist")
        $('#mailexistModal').css("display", "block");
        $('#mailexistModal').addClass("show");
        $('.overlay').css("display", "block");
      }
      else if(result.status == "success"){
        console.log("user added successfully")
        $('#signupModal').css("display", "block");
        $('#mailesignupModalxistModal').addClass("show");
        $('.overlay').css("display", "block");
      }
      
    })
  }

}
