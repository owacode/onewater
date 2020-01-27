import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthService } from '../auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {


  constructor(public http: HttpClient, public auth: AuthService) { }

  ngOnInit() {

    let header = document.querySelector('header');
    let fixHeader = function() {
      if ($(window).scrollTop() > 80) {
        $(header).addClass("fixed-header");
        //console.log("fix header");
      }
      else{
        $(header).removeClass("fixed-header");
        //console.log("remove header");
      }
    }

    $(window).on("scroll",fixHeader);
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
