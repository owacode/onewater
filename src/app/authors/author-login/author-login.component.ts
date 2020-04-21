import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';
import { AuthorAuthService } from '../services/author-auth.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { ModalFunctions } from '../../shared-functions/modal-functions';
import { AuthService } from 'src/app/auth.service';
import { InstructorService } from 'src/app/instructors/instructor-admin/instructor.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-author-login',
  templateUrl: './author-login.component.html',
  styleUrls: ['./author-login.component.scss']
})

export class AuthorLoginComponent implements OnInit {

  user: FormGroup;
  loginuser: FormGroup;
  resetpassform: FormGroup;
  loginsubmitted: boolean = false;
  registersubmitted: boolean = false;
  resetpasssubmitted: boolean = false;
  showText: boolean;
  showregform() {
    this.modal.hideBtnLoader();
    this.showText = true;
    document.querySelector(".vldauth")['style'].display = "none";
    document.querySelector(".vldreg")['style'].display = "flex";
    document.getElementById("login-text")['style'].display = "none"
    document.getElementById("signup-text")['style'].display = "block"
  }

  showauthform() {
    this.modal.hideBtnLoader();
    this.showText = false;
    document.querySelector(".vldauth")['style'].display = "flex";
    document.querySelector(".vldreg")['style'].display = "none";
    document.querySelector(".vldrecpass")['style'].display = "none";
    document.getElementById("login-text")['style'].display = "block"
    document.getElementById("signup-text")['style'].display = "none"
  }

  showrecoveryform() {
    this.modal.hideBtnLoader();
    document.querySelector(".vldauth")['style'].display = "none";
    document.querySelector(".vldrecpass")['style'].display = "flex";
    document.getElementById("login-text")['style'].display = "none"
    document.getElementById("signup-text")['style'].display = "none"
  }

  passwordResetSuccess(){
    this.modal.closeModal('#forgotpassModal');
    this.showauthform();
  }

  constructor(public http: HttpClient, public auth: AuthorAuthService, public userauth: AuthService, public route:Router, public modal:ModalFunctions, public instructorauth: InstructorService, public state: ActivatedRoute) {
  }

  toRender;

  ngOnInit() {
    this.auth.checkLocalStorage();

    this.state.params.subscribe(result => {this.toRender = result.state});
    if(this.toRender == 'login'){
      this.showauthform();
    }
    else {
      this.showText = true;
      this.showregform();
    }

    this.user = new FormGroup({
      author_name: new FormControl(null, { validators: [Validators.required] }),
      author_email: new FormControl(null, { validators: [Validators.required, Validators.email] }),
      password: new FormControl(null, { validators: [Validators.required, Validators.minLength(6)] }),
      cpassword: new FormControl(null, { validators: [Validators.required] })
    });

    this.loginuser = new FormGroup({
      email: new FormControl(null, { validators: [Validators.required, Validators.email] }),
      password: new FormControl(null, { validators: [Validators.required] }),
    });

    this.resetpassform = new FormGroup({
      email: new FormControl(null, { validators: [Validators.required, Validators.email] })
    });

  }

  register() {
    this.registersubmitted = true;
    if (this.user.invalid) {
      this.modal.hideBtnLoader();
      return;
    }

    if (this.user.value.password != this.user.value.cpassword) {
      this.modal.hideBtnLoader();
      this.modal.openModal("#passModal");
      return;
    };
    console.log(this.user.value);
    this.auth.author(this.user.value).subscribe(result=> {
      if(result.status == 'error'){
        console.log("email already exist");
        this.modal.hideBtnLoader();
        this.modal.openModal('#mailexistModal');
        return;
      }
      else{
        console.log("author added successfully");
              this.modal.hideBtnLoader();
              this.modal.openModal('#signupModal');
              return;
      }

    });
  }

  login() {
    this.loginsubmitted = true;

    if (this.loginuser.invalid) {
        console.log("invalid detail format");
        this.modal.hideBtnLoader();
        return;
    }

    console.log(this.loginuser.value);
    this.auth.login(this.loginuser.value).subscribe(result=> {

      console.log(result,'test reult');
            if(result.msg == 'No User Found' || result.msg == 'Incorrect Password'){
              console.log("invalid credentials");
              this.modal.hideBtnLoader();
              this.modal.openModal('#invalidModal');
              return;
            }
            else if(result.msg == 'User Email not Verified'){
              console.log("user email not verified");
              this.modal.hideBtnLoader();
              this.modal.openModal('#loginModal');
              return;
            }
            else if(result.result.form_filled == true && result.result.approvedid == "null"){
              console.log("waiting for approval")
              this.modal.hideBtnLoader();
              this.modal.openModal('#pendingModal');
              return;
            }

            if(result.status =='error') return;
            this.auth.authoremail=result.result.email;
            this.auth.authorid=result.result.id;
            this.auth.authorname=result.result.name
            this.auth.authormainid=result.result.mainid;
            this.auth.authorapprovedid=result.result.approvedid;
            if(result.result.form_filled){
              localStorage.setItem('onewaterauthortoken',result.result.token)
              localStorage.setItem('authoremail',this.auth.authoremail)
              localStorage.setItem('authorid',this.auth.authorid)
              localStorage.setItem('authormainid',this.auth.authormainid)
              localStorage.setItem('name',result.result.name)
              localStorage.setItem('image',result.result.image)
              localStorage.setItem('form_filled_job',result.result.form_filled)
              if(result.result.approvedid=='null') {
                // return(alert("Profile Not Approved Yet"));
                this.auth.approvedLitsener.next({
                  status:false
                })
               return this.route.navigate(['/onewaterblog/author-reg']);
              }
              this.auth.approvedLitsener.next({
                status:true
              })
              localStorage.setItem('authorapprovedid',this.auth.authorapprovedid)
              this.route.navigate(['/author']);
            }else{
              localStorage.setItem('onewaterauthortoken',result.result.token)
              localStorage.setItem('name',result.result.name)
              localStorage.setItem('image',result.result.image)
              localStorage.setItem('authoremail',this.auth.authoremail)
              localStorage.setItem('authorid',this.auth.authorid)
              localStorage.setItem('authormainid',this.auth.authormainid)
              localStorage.setItem('form_filled_job',result.result.form_filled)
              this.route.navigate(['/onewaterblog/author-reg']);
            }
          })
  }

  resetpassword() {
    this.resetpasssubmitted = true;
    console.log(this.resetpassform.value);
    if(this.resetpassform.invalid){
      console.log('invalid reset form');
      this.modal.hideBtnLoader();
      return;
    }
    console.log(this.resetpassform.value,'after reset');
    this.auth.resetpassword(this.resetpassform.value)
    .subscribe(result=> {
      this.modal.hideBtnLoader();
      if(result.msg == 'Email not Exist'){
        console.log("email doesn't not exist");
        this.modal.openModal('#resetMailExist');
        return;
      }
      console.log(result);
      this.modal.openModal('#forgotpassModal');
    })
  }

}
