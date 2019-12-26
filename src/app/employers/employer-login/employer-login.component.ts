import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';
import {AuthJobService} from '../services/auth.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-employer-login',
  templateUrl: './employer-login.component.html',
  styleUrls: ['./employer-login.component.scss']
})
export class EmployerLoginComponent implements OnInit {

  user:FormGroup;
  loginuser:FormGroup;
  showregform(){
    document.querySelector(".vldauth")['style'].display = "none";
    document.querySelector(".vldreg")['style'].display = "flex";
    document.getElementById("login-text")['style'].display = "none"
    document.getElementById("signup-text")['style'].display = "block"

    }

     showauthform(){
    document.querySelector(".vldauth")['style'].display = "flex";
    document.querySelector(".vldreg")['style'].display = "none";
    document.querySelector(".vldrecpass")['style'].display = "none";
    document.getElementById("login-text")['style'].display = "block"
    document.getElementById("signup-text")['style'].display = "none"
    }

     showrecoveryform(){
    document.querySelector(".vldauth")['style'].display = "none";
    document.querySelector(".vldrecpass")['style'].display = "flex";
    document.getElementById("login-text")['style'].display = "none"
    document.getElementById("signup-text")['style'].display = "none"
    }

  constructor(public auth:AuthJobService) { }

  ngOnInit() {

    this.auth.checkLocalStorage();
    this.showregform();
    this.user= new FormGroup({
      company_name:new FormControl(null,{validators:[Validators.required,Validators.email]}),
      company_email:new FormControl(null,{validators:[Validators.required,Validators.email]}),
      password:new FormControl(null,{validators:[Validators.required]}),
      cpassword:new FormControl(null,{validators:[Validators.required]})
    });

    this.loginuser= new FormGroup({
      email:new FormControl(null,{validators:[Validators.required,Validators.email]}),
      password:new FormControl(null,{validators:[Validators.required]}),

    });
  }
  register(){
    console.log(this.user.value);
    this.auth.employee(this.user.value);
  }

  login(){
    console.log(this.loginuser.value);
    this.auth.login(this.loginuser.value);
  }

}
