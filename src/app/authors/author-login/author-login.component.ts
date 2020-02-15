import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import * as $ from 'jquery';
import * as modal from 'bootstrap';
declare var modal: any;
// declare var $:any;

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

  constructor(public auth: AuthService) {
    this.auth.emailexist$.subscribe(
      () => {
        console.log("hit email not exist")
        $('#mailexistModal').css("display", "block");
        $('#mailexistModal').addClass("show");
        $('.overlay').css("display", "block");
      }
    );

    this.auth.notverifiedmail$.subscribe(
      () => {
        console.log("hit not verified")
        $('#loginModal').css("display", "block");
        $('#loginModal').addClass("show");
        $('.overlay').css("display", "block");
      }
    );

    this.auth.verifymail$.subscribe(
      () => {
        console.log("hit verify mail")
        $('#signupModal').css("display", "block");
        $('#signupModal').addClass("show");
        $('.overlay').css("display", "block");
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
      return;
    }

    if (this.user.value.password != this.user.value.cpassword) return alert("Password Not Matched");
    console.log(this.user.value);
    this.auth.author(this.user.value);
  }

  loginsubmitted: boolean = false;
  login() {
    this.loginsubmitted = true;
    if (this.loginuser.invalid) {
        console.log("invalid details");
          $('#invalidModal').css("display", "block");
          $('#invalidModal').addClass("show");
          $('.overlay').css("display", "block");
        return;
    }

    console.log(this.loginuser.value);
    this.auth.login(this.loginuser.value);
  }

}
