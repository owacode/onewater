import { Component, OnInit } from "@angular/core";
import {
  Router,
  NavigationStart,
  NavigationEnd,
  ActivatedRoute
} from "@angular/router";
import { Location, PopStateEvent } from "@angular/common";
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService
import { AuthService } from "./auth.service";
import * as jwt_decode from "jwt-decode";
import { InstructorService } from './instructors/instructor-admin/instructor.service';
// import { AuthService } from './authors/services/auth.service';

// import * as $ from "jquery";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "one-water-blog";
  showLogin: boolean = false;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(
    public router: Router,
    private location: Location,
    public auth: AuthService,
    public instructorservice: InstructorService,
    public route: ActivatedRoute
  ) {
    this.instructorservice.checklocalstorage();
    var hash = 'null'
    hash = window.location.hash;
    var localcookie = this.readCookie("id_token");
    let decodedtoken;
    console.log(hash,localcookie,'ieifei')
    if (hash || (localcookie != 'null' && localcookie !=null)) {
      console.log('if true')
      if (hash) {
      console.log('if true 1')
        this.auth.isLoggedIn = true;
        let fetch_token = hash.split("#");

        let tokens = fetch_token[1].split("&");
        this.auth.access_token = tokens[0].split("=")[1];
        this.auth.id_token = tokens[4].split("=")[1];
        this.createCookie("access_token", this.auth.access_token);
        this.createCookie("id_token", this.auth.id_token);
        decodedtoken = this.getDecodedAccessToken(this.auth.id_token);
        decodedtoken = this.getDecodedAccessToken(this.auth.id_token);
        this.createCookie("name", decodedtoken.name);
        this.createCookie("nickname", decodedtoken.nickname);
        this.createCookie("userpicture", decodedtoken.picture);
        this.createCookie("user_id", decodedtoken.sub.split("|")[3]);
        this.auth.user_id = decodedtoken.sub.split("|")[3];
        this.auth.picture = this.readCookie("userpicture");
        this.auth.nickname = this.readCookie("nickname");
        this.auth.name = this.readCookie("name");
      } else {
        this.auth.isLoggedIn = true;
        this.auth.access_token = this.readCookie("access_token");
        this.auth.id_token = this.readCookie("id_token");
        this.auth.picture = this.readCookie("userpicture");
        this.auth.nickname = this.readCookie("nickname");
        this.auth.name = this.readCookie("name");
        this.auth.user_id=this.readCookie("user_id")
      }
    }

    this.location.subscribe((ev: PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });
    this.router.events.subscribe((ev: any) => {
      if (ev instanceof NavigationStart) {
        if (ev.url != this.lastPoppedUrl)
          this.yScrollStack.push(window.scrollY);
      } else if (ev instanceof NavigationEnd) {
        if (ev.url == this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
          window.scrollTo(0, this.yScrollStack.pop());
        } else window.scrollTo(0, 0);
      }
    });
  }
  ngOnInit() {
    this.router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        if (
          event["url"] == "/login" ||
          event["url"] == "/dashboard" ||
          event["url"] == "/thankyou-author" ||
          event["url"] == "/thankyou-employer" ||
          event["url"].includes("/onewaterjobs/employer/") ||
          event["url"].includes("/onewaterblog/author-admin") ||
          event["url"].includes("/user-admin/")
        ) {
          this.showLogin = false;
        } else {
          this.showLogin = true;
        }
      }
    });
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  createCookie(key, value) {
    let cookie = escape(key) + "=" + escape(value) + ";";
    document.cookie = cookie;
    // console.log(cookie);
    // console.log("Creating new cookie with key: " + key + " value: " + value);
  }

  readCookie(name) {
    let key = name + "=";
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(key) === 0) {
        return cookie.substring(key.length, cookie.length);
      }
    }
    return null;
  }
}
