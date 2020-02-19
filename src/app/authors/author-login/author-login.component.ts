import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';
import { AuthorAuthService } from '../services/author-auth.service';
import { Router } from '@angular/router';
import { ModalFunctions } from '../../shared-functions/modal-functions';
import { AuthService } from 'src/app/auth.service';
import { InstructorService } from 'src/app/instructors/instructor-admin/instructor.service';

@Component({
  selector: 'app-author-login',
  templateUrl: './author-login.component.html',
  styleUrls: ['./author-login.component.scss']
})
export class AuthorLoginComponent implements OnInit {

  user: FormGroup;
  loginuser: FormGroup;

  showregform() {
    document.querySelector(".vldauth")['style'].display = "none";
    document.querySelector(".vldreg")['style'].display = "flex";
    document.getElementById("login-text")['style'].display = "none"
    document.getElementById("signup-text")['style'].display = "block"
  }

  showauthform() {
    document.querySelector(".vldauth")['style'].display = "flex";
    document.querySelector(".vldreg")['style'].display = "none";
    document.querySelector(".vldrecpass")['style'].display = "none";
    document.getElementById("login-text")['style'].display = "block"
    document.getElementById("signup-text")['style'].display = "none"
  }

  showrecoveryform() {
    document.querySelector(".vldauth")['style'].display = "none";
    document.querySelector(".vldrecpass")['style'].display = "flex";
    document.getElementById("login-text")['style'].display = "none"
    document.getElementById("signup-text")['style'].display = "none"
  }

  constructor(public auth: AuthorAuthService, public userauth: AuthService, public route:Router, public modal:ModalFunctions, public instructorauth: InstructorService) {

  }

  ngOnInit() {
    this.auth.checkLocalStorage();
    this.showregform();

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

  }

  registersubmitted: boolean = false;

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

  loginsubmitted: boolean = false;
  login() {
    console.log(this.userauth.access_token,localStorage.getItem('instructor_email'))
    if(this.userauth.access_token != null || localStorage.getItem('instructor_email')) {
      this.modal.hideBtnLoader();
      return alert("Please Logout of other platform to use this service");
    }
    this.loginsubmitted = true;

    if (this.loginuser.invalid) {
        console.log("invalid detail format");
        this.modal.hideBtnLoader();
        return;
    }

    console.log(this.loginuser.value);
    this.auth.login(this.loginuser.value).subscribe(result=> {

      console.log(result,'test reult')
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

}
