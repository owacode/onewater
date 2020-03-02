import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';

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

  constructor(public modal: ModalFunctions) { }

  ngOnInit() {
    this.showregform();
  }

}
