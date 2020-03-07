import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';
import { MayorAuthService } from '../services/mayor-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mayor-login',
  templateUrl: './mayor-login.component.html',
  styleUrls: ['./mayor-login.component.scss']
})
export class MayorLoginComponent implements OnInit {

  user: FormGroup;
  loginuser: FormGroup;
  resetpassform: FormGroup;
  loginsubmitted: boolean = false;
  registersubmitted: boolean = false;
  resetpasssubmitted: boolean = false;

  showregform() {
    this.modal.hideBtnLoader();
    document.querySelector(".vldauth")['style'].display = "none";
    document.querySelector(".vldreg")['style'].display = "flex";
    document.getElementById("login-text")['style'].display = "none"
    document.getElementById("signup-text")['style'].display = "block"
  }

  showauthform() {
    this.modal.hideBtnLoader();
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

  constructor(public modal: ModalFunctions, public auth: MayorAuthService, public route:Router) { }

  ngOnInit() {
    this.auth.checkLocalStorage();
    this.showregform();

    this.user = new FormGroup({
      mayor_name: new FormControl(null, { validators: [Validators.required] }),
      mayor_email: new FormControl(null, { validators: [Validators.required, Validators.email] }),
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
    this.auth.addMayor(this.user.value).subscribe(result=> {
      if(result.status == 'error'){
        console.log("email already exist");
        this.modal.hideBtnLoader();
        this.modal.openModal('#mailexistModal');
        return;
      }
      else{
        console.log("mayor added successfully");
              this.modal.hideBtnLoader();
              this.modal.openModal('#signupModal');
              return;
      }

    });
  }

  login() {
    // console.log(this.userauth.access_token,localStorage.getItem('instructor_email'))
    // if(this.userauth.access_token != null || localStorage.getItem('instructor_email')) {
    //   this.modal.hideBtnLoader();
    //   this.modal.openModal('#platformModal');
    //   return;
    // }
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
            this.auth.mayoremail=result.result.email;
            this.auth.mayorid=result.result.id;
            this.auth.mayorname=result.result.name
            this.auth.mayorimage=result.result.image;
            this.auth.mayormainid=result.result.mainid;
            this.auth.mayorapprovedid=result.result.approvedid;
            if(result.result.form_filled){
              localStorage.setItem('onewatermayortoken',result.result.token)
              localStorage.setItem('mayoremail',this.auth.mayoremail)
              localStorage.setItem('mayorid',this.auth.mayorid)
              localStorage.setItem('mayormainid',this.auth.mayormainid)
              localStorage.setItem('mayorname',result.result.name)
              localStorage.setItem('mayorimage',result.result.image)
              localStorage.setItem('form_filled_mayor',result.result.form_filled)
              if(result.result.approvedid=='null') {
                // return(alert("Profile Not Approved Yet"));
                this.auth.approvedLitsener.next({
                  status:false
                })
               return this.route.navigate(['/onewaterblog/mayor-reg']);
              }
              this.auth.approvedLitsener.next({
                status:true
              })
              localStorage.setItem('mayorapprovedid',this.auth.mayorapprovedid)
              this.route.navigate(['/mayor']);
            }else{
              localStorage.setItem('onewatermayortoken',result.result.token)
              localStorage.setItem('name',result.result.name)
              localStorage.setItem('image',result.result.image)
              localStorage.setItem('mayoremail',this.auth.mayoremail)
              localStorage.setItem('mayorid',this.auth.mayorid)
              localStorage.setItem('mayormainid',this.auth.mayormainid)
              localStorage.setItem('form_filled_mayor',result.result.form_filled)
              this.route.navigate(['/onewaterblog/mayor-reg']);
            }
          })
  }

  resetpassword() {
    this.modal.showBtnLoader();
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
      console.log(result);
      this.modal.hideBtnLoader();
    })
  }
}
