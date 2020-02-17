import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ModalFunctions } from '../../shared-functions/modal-functions';

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

  constructor(public auth: AuthService, public route:Router, public modal:ModalFunctions) {
    this.auth.emailexist$.subscribe(
      () => {
        console.log("hit email not exist")
        this.modal.hideBtnLoader();
        this.modal.openModal('#mailexistModal');
      }
    );

    this.auth.notverifiedmail$.subscribe(
      () => {
        console.log("hit not verified")
        this.modal.hideBtnLoader();
        this.modal.openModal('#loginModal');
      }
    );

    this.auth.verifymail$.subscribe(
      () => {
        console.log("hit verify mail")
        this.modal.hideBtnLoader();
      }
    );
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
      return
    };
    console.log(this.user.value);
    this.auth.author(this.user.value).subscribe(result=> {
      if(result.status == 'error'){
        console.log("email already exist");
        this.modal.hideBtnLoader();
        this.modal.openModal('#mailexistModal');
      }
      else{
        console.log("author added successfully");
              this.modal.hideBtnLoader();
              this.modal.openModal('#signupModal');
      }

    });
  }

  loginsubmitted: boolean = false;
  login() {
    this.loginsubmitted = true;

    if (this.loginuser.invalid) {
        console.log("invalid detail format");
        this.modal.hideBtnLoader();
        return;
    }

    console.log(this.loginuser.value);
    this.auth.login(this.loginuser.value).subscribe(result=> {

      console.log(result,'test reult')
            if(result.status == 'error' || result.msg == 'Incorrect Password'){
              console.log("invalid credentials");
              this.modal.hideBtnLoader();
              this.modal.openModal('#invalidModal');
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
