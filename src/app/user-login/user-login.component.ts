import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormControl,
  EmailValidator,
} from "@angular/forms";
import { ModalFunctions } from "../shared-functions/modal-functions";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.scss"],
})
export class UserLoginComponent implements OnInit {
  loginuser: FormGroup;
  resetpassform: FormGroup;
  loginsubmitted: boolean = false;
  resetpasssubmitted: boolean;
  constructor(
    public modal: ModalFunctions,
    public auth: AuthService,
    public route: Router
  ) {}


  showrecoveryform() {
    this.modal.hideBtnLoader();
    document.querySelector(".vldauth")['style'].display = "none";
    document.querySelector(".vldrecpass")['style'].display = "flex";
  }

  showauthform() {
    this.modal.hideBtnLoader();
    document.querySelector(".vldauth")['style'].display = "flex";
    document.querySelector(".vldrecpass")['style'].display = "none";
  }

  passwordResetSuccess(){
    this.modal.closeModal('#forgotpassModal');
    this.showauthform();
  }
  ngOnInit() {
    this.showauthform();
    this.loginuser = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl(null, { validators: [Validators.required] }),
    });

    this.resetpassform = new FormGroup({
      email: new FormControl(null, { validators: [Validators.required, Validators.email] })
    });
  }

  login() {
    this.loginsubmitted = true;

    if (this.loginuser.invalid) {
      //console.log("invalid detail format");
      this.modal.hideBtnLoader();
      return;
    }
    //console.log(this.loginuser.value);

    this.auth.login(this.loginuser.value).subscribe((result) => {
      if(result.msg == 'Author Account'){
        //console.log("author tried to login");
        this.modal.openModal('#notUser');
      }
      else if(result.msg == 'No User Found' || result.msg == 'Incorrect Password'){
        //console.log("invalid credentials");
        this.modal.hideBtnLoader();
        this.modal.openModal('#invalidModal');
        return;
      }
      else if(result.msg == 'User Email not Verified'){
        //console.log("user email not verified");
        this.modal.hideBtnLoader();
        this.modal.openModal('#loginModal');
        return;
      }
      this.modal.hideBtnLoader();
      //console.log(result);
      this.auth.token = result.result.token;
      this.auth.user_id = result.result.user._id;
      this.auth.name = result.result.user.name;
      this.auth.isLoggedIn = true;
      localStorage.setItem("onewaterusertoken", result.result.token);
      localStorage.setItem("onewateruserid", this.auth.user_id);
      localStorage.setItem("onewaterusername", this.auth.name);
      this.route.navigate(["/user-admin"]);
    });
  }

  resetpassword() {
    this.resetpasssubmitted = true;
    //console.log(this.resetpassform.value);
    if(this.resetpassform.invalid){
      //console.log('invalid reset form');
      this.modal.hideBtnLoader();
      return;
    }
    //console.log(this.resetpassform.value,'after reset');
    this.auth.resetpassword(this.resetpassform.value)
    .subscribe(result=> {
      this.modal.hideBtnLoader();
      if(result.msg == 'Email not Exist'){
        //console.log("email doesn't not exist");
        this.modal.openModal('#resetMailExist');
        this.resetpassform.reset();
        this.resetpasssubmitted = false;
        return;
      }
      //console.log(result);
      this.modal.openModal('#forgotpassModal');
      this.resetpassform.reset();
      this.resetpasssubmitted = false;
    })
  }

}
