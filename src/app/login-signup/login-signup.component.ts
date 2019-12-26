import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {

      // showregform(){
      // document.querySelector(".vldauth")['style'].display = "none";
      // document.querySelector(".vldreg")['style'].display = "flex";
      // }

      //  showauthform(){
      // document.querySelector(".vldauth")['style'].display = "flex";
      // document.querySelector(".vldreg")['style'].display = "none";
      // document.querySelector(".vldrecpass")['style'].display = "none";
      // }

      //  showrecoveryform(){
      // document.querySelector(".vldauth")['style'].display = "none";
      // document.querySelector(".vldrecpass")['style'].display = "flex";
      // }

  constructor(public http:HttpClient) { }
  user;
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

    this.http.post('https://onewater-auth.herokuapp.com/newuser',this.user.value)
    .subscribe(result=>{
      console.log("User Added", result)
      alert("User Added Successfully");
    })
  }

}
