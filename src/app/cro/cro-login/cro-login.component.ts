import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormControl,
  EmailValidator
} from "@angular/forms";
import { ModalFunctions } from "src/app/shared-functions/modal-functions";
import { CROAuthService } from "../services/cro-auth.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-cro-login",
  templateUrl: "./cro-login.component.html",
  styleUrls: ["./cro-login.component.scss"]
})
export class CroLoginComponent implements OnInit {
  user: FormGroup;
  loginuser: FormGroup;
  resetpassform: FormGroup;
  loginsubmitted: boolean = false;
  registersubmitted: boolean = false;
  resetpasssubmitted: boolean = false;

  showregform() {
    this.modal.hideBtnLoader();
    document.querySelector(".vldauth")["style"].display = "none";
    document.querySelector(".vldreg")["style"].display = "flex";
    document.getElementById("login-text")["style"].display = "none";
    document.getElementById("signup-text")["style"].display = "block";
  }

  showauthform() {
    this.modal.hideBtnLoader();
    document.querySelector(".vldauth")["style"].display = "flex";
    document.querySelector(".vldreg")["style"].display = "none";
    document.querySelector(".vldrecpass")["style"].display = "none";
    document.getElementById("login-text")["style"].display = "block";
    document.getElementById("signup-text")["style"].display = "none";
  }

  showrecoveryform() {
    this.modal.hideBtnLoader();
    document.querySelector(".vldauth")["style"].display = "none";
    document.querySelector(".vldrecpass")["style"].display = "flex";
    document.getElementById("login-text")["style"].display = "none";
    document.getElementById("signup-text")["style"].display = "none";
  }

  constructor(
    public modal: ModalFunctions,
    public auth: CROAuthService,
    public route: Router,
    public state: ActivatedRoute
  ) {}

  toRender;

  ngOnInit() {
    this.auth.checkLocalStorage();
  
    this.state.params.subscribe(result => {this.toRender = result.state});
    if(this.toRender == 'login'){
      this.showauthform();
    }
    else {
      this.showregform();
    }

    this.user = new FormGroup({
      cro_name: new FormControl(null, { validators: [Validators.required] }),
      cro_email: new FormControl(null, { validators: [Validators.required, Validators.email] }),
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
    }
    console.log(this.user.value);
    this.auth.cro(this.user.value).subscribe(result => {
      if (result.status == "error") {
        console.log("email already exist");
        this.modal.hideBtnLoader();
        this.modal.openModal("#mailexistModal");
        return;
      } else {
        console.log("cro added successfully");
        this.modal.hideBtnLoader();
        this.modal.openModal("#signupModal");
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
    this.auth.login(this.loginuser.value).subscribe(result => {
      console.log(result, "test reult");
      if (result.msg == "No User Found" || result.msg == "Incorrect Password") {
        console.log("invalid credentials");
        this.modal.hideBtnLoader();
        this.modal.openModal("#invalidModal");
        return;
      } else if (result.msg == "User Email not Verified") {
        console.log("user email not verified");
        this.modal.hideBtnLoader();
        this.modal.openModal("#loginModal");
        return;
      } else if (
        result.result.form_filled == true &&
        result.result.approvedid == "null"
      ) {
        console.log("waiting for approval");
        this.modal.hideBtnLoader();
        this.modal.openModal("#pendingModal");
        return;
      }

      if (result.status == "error") return;
      this.auth.croemail = result.result.email;
      this.auth.croid = result.result.id;
      this.auth.croname = result.result.name;
      this.auth.cromainid = result.result.mainid;
      this.auth.croapprovedid = result.result.approvedid;
      if (result.result.form_filled) {
        localStorage.setItem("onewatercrotoken", result.result.token);
        localStorage.setItem("croemail", this.auth.croemail);
        localStorage.setItem("croid", this.auth.croid);
        localStorage.setItem("cromainid", this.auth.cromainid);
        localStorage.setItem("croname", result.result.name);
        localStorage.setItem("croimage", result.result.image);
        localStorage.setItem("form_filled_cro", result.result.form_filled);
        if (result.result.approvedid == "null") {
          this.auth.approvedLitsener.next({
            status: false
          });
          return this.route.navigate(["/onewaterblog/cro-reg"]);
        }
        this.auth.approvedLitsener.next({
          status: true
        });
        localStorage.setItem("croapprovedid", this.auth.croapprovedid);
        this.route.navigate(["/cro"]);
      } else {
        localStorage.setItem("onewatercrotoken", result.result.token);
        localStorage.setItem("croname", result.result.name);
        localStorage.setItem("croimage", result.result.image);
        localStorage.setItem("croemail", this.auth.croemail);
        localStorage.setItem("croid", this.auth.croid);
        localStorage.setItem("cromainid", this.auth.cromainid);
        localStorage.setItem("form_filled_cro", result.result.form_filled);
        this.route.navigate(["/onewaterblog/cro-reg"]);
      }
    });
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
      console.log(result);
      this.modal.hideBtnLoader();
    })
  }
}
