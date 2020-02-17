import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ModalFunctions } from '../shared-functions/modal-functions';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})

export class LoginSignupComponent implements OnInit {
  constructor(public http:HttpClient, public modal: ModalFunctions) { }
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
      this.modal.hideBtnLoader();
      return;
    }
    if(this.user.value.password != this.user.value.cpassword) {
      this.modal.hideBtnLoader();
      this.modal.openModal("#passModal");
      return;
    };
    console.log('pass',this.user.value);

    this.http.post<{status:any,payload:any}>('https://onewater-auth.herokuapp.com/newuser',this.user.value)
    .subscribe(result=>{
      if(result.status == "error"){
        console.log("user already exist")
        this.modal.hideBtnLoader();
        this.modal.openModal("#mailexistModal");
      }
      else if(result.status == "success"){
        console.log("user added successfully")
        this.modal.hideBtnLoader();
        this.modal.openModal("#signupModal");
      }
    })
  }

}
