import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';
import { ModalFunctions } from '../shared-functions/modal-functions';
import * as jwt_decode from "jwt-decode";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  decoded_token;
  resetpassword;
  redirectRoute;
  submitted: Boolean = false;
  constructor(public modal: ModalFunctions, public http: HttpClient, public route: ActivatedRoute) { }

  ngOnInit() {
    this.resetpassword = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null, { validators: [Validators.required, Validators.minLength(6)] }),
      cpassword: new FormControl(null, { validators: [Validators.required] })
    });

    this.route.params.subscribe(result=> {
      //console.log(result)
      this.decoded_token = this.getDecodedAccessToken(result.token);
      //console.log(this.decoded_token);
      this.resetpassword.value.email = this.decoded_token.email;
      //console.log(this.resetpassword.value.email)
    })
  }

  reset() {
    this.submitted = true;
    this.resetpassword.value.email = this.decoded_token.email;
    //console.log(this.resetpassword);
    if(this.resetpassword.invalid) {
      //console.log("invalid reset password form");
      this.modal.hideBtnLoader();
      return;
    }
    if(this.resetpassword.value.password != this.resetpassword.value.cpassword) {
      //alert('password not match');
      this.modal.openModal('#passModal');
      this.modal.hideBtnLoader();
      return;
    }

    if(this.decoded_token.platform == 'blog_author') {
      this.http.post<{status: string, msg: string, result: any}>('http://18.223.24.178:8000/update-password',this.resetpassword.value)
      .subscribe(result=> {
        //console.log(result);
        this.modal.hideBtnLoader()
        this.modal.openModal('#passSuccessModal');
        this.redirectRoute = "/onewaterblog/author/login";
      })
    }else if(this.decoded_token.platform == 'instructor') {
      this.http.post<{status: string, msg: string, result: any}>('http://18.223.24.178:7050/update-password',this.resetpassword.value)
      .subscribe(result=> {
        //console.log(result);
        this.modal.hideBtnLoader();
        this.modal.openModal('#passSuccessModal');

      })
    }else if(this.decoded_token.platform == 'blog_cro') {
      this.http.post<{status: string, msg: string, result: any}>('https://onewater-cro.herokuapp.com/update-password',this.resetpassword.value)
      .subscribe(result=> {
        //console.log(result);
        this.modal.hideBtnLoader();
        this.modal.openModal('#passSuccessModal');

      })
    }else if(this.decoded_token.platform == 'blog_mayor') {
      this.http.post<{status: string, msg: string, result: any}>('https://onewater-mayor.herokuapp.com/update-password',this.resetpassword.value)
      .subscribe(result=> {
        //console.log(result);
        this.modal.hideBtnLoader();
        this.modal.openModal('#passSuccessModal');

      })
    }else if(this.decoded_token.platform == 'onewateruser') {
      this.http.post<{status: string, msg: string, result: any}>('http://18.223.24.178:7000/update-password',this.resetpassword.value)
      .subscribe(result=> {
        //console.log(result);
        this.modal.hideBtnLoader();
        this.modal.openModal('#passSuccessModal');
        this.redirectRoute = "/login";
      })
    }
    this.resetpassword.reset();
    this.submitted = false;

  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

}
