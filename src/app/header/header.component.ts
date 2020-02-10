import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthService } from '../auth.service';
import * as $ from 'jquery';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {  

  constructor(public http: HttpClient, public auth: AuthService, public router: Router) { }

  ngOnInit() {
    const header = document.querySelector('header');
    const menu = document.querySelector('.menu');
    const logo = document.querySelector('.logo');
    const hamburger = document.querySelector('.hamburger');
    const menulink = document.querySelectorAll('.navlink a');

     let fixHeader = function(){
      if ($(window).scrollTop() > 70) {
        $(header).addClass("fixed-header");
        //console.log("fix header");
      }
      else{
        $(header).removeClass("fixed-header");
        //console.log("remove header");
      }
    }

    let showMenu = function(){
      $(menu).toggleClass('show-menu');
      $(logo).toggleClass('mobile-logo');
      $(hamburger).toggleClass('clicked');
    }

      $(window).on("scroll",fixHeader);
      $(hamburger).on("click",showMenu);
      $(menulink).on("click",showMenu);

      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (event['url'] == '/onewaterblog/author-login' ||
            event['url'].includes('/onewaterblog/category') ||
            event['url'].includes('/o-wow/video-category') ||
            event['url'] == '/onewaterjobs/emp-login' ||
            event['url'] == '/instructor-login'
            ) {
            $(header).addClass('black-header');
          } 
          else{
            $(header).removeClass('black-header');
          }
        }
      });
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
