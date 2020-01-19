import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import * as $ from "jquery";
import { HttpClient } from '@angular/common/http'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  headerBlue = false;

  constructor(public router: Router, public http: HttpClient, public auth:AuthService) {  }
  ngOnInit() {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event['url'] == '/onewaterblog/author-login' ||
          event['url'].includes('/onewaterblog/category') ||
          event['url'].includes('/o-wow/video-category') ||
          event['url'] == '/onewaterjobs/emp-login') {
          this.headerBlue = true;
        } else {
          this.headerBlue = false;
        }
      }
    });

    // $(document).ready(function() {
    //   if (window.location.href.indexOf("author-login") > -1 || 
    //       window.location.href.indexOf("onewaterblog/category") > -1 ||
    //       window.location.href.indexOf("o-wow/video-category") > -1 ||
    //       window.location.href.indexOf("emp-login") > -1
    //   ) {
    //     console.log("turn header blue");
    //     $(".menu").addClass("blue-link");
    //     $(".logo-white").css("display","none");
    //     $(".logo-blue").css("display","block");
    //   }
    //   else{
    //     console.log("turn header white");
    //     $(".logo-white").css("display","block");
    //     $(".logo-blue").css("display","none");
    //   }
    // });

    //---------------HEADER-------------//

    let menu_links = document.querySelectorAll(".menu ul li");
    let hamburger = document.querySelector(".hamburger");
    let links = document.querySelectorAll(".navlink a");
    let menu = document.querySelector(".menu");

    //for sticking the header
    if (window.innerWidth >= 1124) {
      $(window).on("scroll", function () {
        if ($(this).scrollTop() > 80) {
          $(".navbar").addClass("navbar-on-scroll");
          $(menu).addClass("slide-out");
        }
        else {
          $(".navbar").removeClass("navbar-on-scroll");
          $(menu).removeClass("slide-out");
        }
      });

      $(hamburger).on("click", function () {
        $(menu).toggleClass("slide-out-scroll");
      });

    }
    else {
      $(window).on("scroll", function () {
        if ($(this).scrollTop() > 80) {
          $(".navbar").addClass("navbar-on-scroll");
        }
        else {
          $(".navbar").removeClass("navbar-on-scroll");
        }
      });
    }

    //toggle hamburger on toggle
    if (innerWidth <= 1124) {
      $(links).on("click", function () {
        $(menu).toggleClass("slide-out-mobile");
        $(hamburger).toggleClass("open");
      });
      $(hamburger).on("click", function () {
        $(menu).toggleClass("slide-out-mobile");
      });
    }

    $(hamburger).on("click", function () {
      // $(menu).toggleClass("menu-opened");
      $(this).toggleClass("open");
    });

  }

  login() {
    this.http.get('http://localhost:3000')
      .subscribe(result => {
        console.log(result);
      })
  }

  logout(){
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
