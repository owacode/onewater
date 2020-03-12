import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthService } from '../auth.service';
import * as $ from 'jquery';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { ModalFunctions } from '../shared-functions/modal-functions';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  form:FormGroup;
  public submited: Boolean = false;

  toggleDropdown(element){
    var panel = document.getElementById(element);
    if (panel.style.display === "none") {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }
}



toggleHeader() {
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      if (
        event['url'] == '/onewaterblog/author-login' ||
        event['url'] == '/onewaterblog/mayor-login' ||
        event['url'] == '/onewaterblog/cro-login' ||
        event['url'] == '/onewaterjobs/emp-login' ||
        event['url'].includes('/onewaterblog/category') ||
        event['url'].includes('/o-wow/video-category') ||
        event['url'] == '/instructor-login') {
        $('header').addClass('black-header');
      }
      else {
        $('header').removeClass('black-header');
      }
    }
  });
}

  constructor(public http: HttpClient, public auth: AuthService, public router: Router, public modal:ModalFunctions) { }

  ngOnInit() {
    const header = document.querySelector('header');
    const menu = document.querySelector('.menu');
    const logo = document.querySelector('.logo');
    const hamburger = document.querySelector('.hamburger');
    const menulink = document.querySelectorAll('.navlink a');

    // document.querySelector('.mobile-dropdown').addEventListener("click",this.toggleUserPanel);
    this.toggleHeader();
    let fixHeader = function () {
      if ($(window).scrollTop() > 70) {
        $(header).addClass("fixed-header");
        //console.log("fix header");
      }
      else {
        $(header).removeClass("fixed-header");
        //console.log("remove header");
      }
    }

    document.querySelector('body').addEventListener("click",()=>{
      var panel = document.querySelector('.dropdown-content');
      panel['style'].display = "none";
    });

    let showMenu = function () {
      $(menu).toggleClass('show-menu');
      $(logo).toggleClass('mobile-logo');
      $(hamburger).toggleClass('clicked');
    }

    $(window).on("scroll", fixHeader);
    $(hamburger).on("click", showMenu);
    $(menulink).on("click", showMenu);

    this.form= new FormGroup({
      name:new FormControl(null, {validators:[Validators.required]}),
      email:new FormControl(null, {validators:[Validators.required,Validators.email]}),
    })
  }



  subscribe(){
    this.submited = true;
    console.log(this.form.value);
    if(this.form.invalid){
      console.log("Invalid newsletter details");
      this.modal.hideBtnLoader();
      return;
    }
    this.http.post<{ status: string}>('https://onewater-job-api.herokuapp.com/subscribe',this.form.value)
    .subscribe(result=>{
      if(result.status == "error"){
        console.log(result,'already suscribed');
        this.modal.hideBtnLoader();
        this.modal.closeModal('#subscribeModal');
        this.modal.openModal("#alreadysubscribedmodal");
        return;
      }

      console.log(result,'suscribed successfully');
      this.modal.hideBtnLoader();
      this.modal.closeModal('#subscribeModal');
      this.modal.openModal("#thanksmodal");
    })
  }

  login() {
    this.http.get('https://onewater-instructor-api.herokuapp.com')
      .subscribe(result => {
        console.log(result);
      })
  }

  logout() {
    this.deleteCookie('name')
    this.deleteCookie('nickname')
    this.deleteCookie('access_token')
    this.deleteCookie('id_token')
    this.deleteCookie('userpicture')
  }

  deleteCookie(name) {
    this.createCookie(name, null);
  }

  createCookie(key, value) {
    let cookie = escape(key) + "=" + escape(value) + ";";
    document.cookie = cookie;
    console.log(cookie);
    console.log("Creating new cookie with key: " + key + " value: " + value);
  }

}
