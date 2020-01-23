import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-instructor-login',
  templateUrl: './instructor-login.component.html',
  styleUrls: ['./instructor-login.component.scss']
})
export class InstructorLoginComponent implements OnInit {

  showregform() {
    document.querySelector(".vldauth")['style'].display = "none";
    document.querySelector(".vldreg")['style'].display = "flex";
    document.getElementById("login-text")['style'].display = "none"
    document.getElementById("signup-text")['style'].display = "block"
  }

  showauthform() {
    document.querySelector(".vldauth")['style'].display = "flex";
    document.querySelector(".vldreg")['style'].display = "none";
    document.getElementById("login-text")['style'].display = "block"
    document.getElementById("signup-text")['style'].display = "none"
  }

  // showrecoveryform() {
  //   document.querySelector(".vldauth")['style'].display = "none";
  //   document.querySelector(".vldrecpass")['style'].display = "flex";
  //   document.getElementById("login-text")['style'].display = "none"
  //   document.getElementById("signup-text")['style'].display = "none"
  // }

  closeModal(thismodal) {
    console.log('hit close')
    $(thismodal).css("display", "none");
    $(thismodal).removeClass("show");
    $('.overlay').css("display", "none");
  }

  constructor() { }

  ngOnInit() {
    this.showregform();

   

  }

}
