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
  loginsubmitted: boolean = false;
  constructor(
    public modal: ModalFunctions,
    public auth: AuthService,
    public route: Router
  ) {}

  ngOnInit() {
    this.loginuser = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl(null, { validators: [Validators.required] }),
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
    this.auth.login(this.loginuser.value).subscribe((result) => {
      this.modal.hideBtnLoader();
      console.log(result);
      this.auth.token = result.result.token;
      this.auth.user_id = result.result.user._id;
      this.auth.name = result.result.user.name;
      localStorage.setItem("onewaterusertoken", result.result.token);
      localStorage.setItem("onewateruserid", this.auth.user_id);
      localStorage.setItem("onewaterusername", this.auth.name);
      this.route.navigate(["/onewater"]);
    });
  }
}
