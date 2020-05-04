import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import * as $ from "jquery";

@Injectable({
  providedIn: "root"
})
export class AuthorAuthService {
  public authoremail = null;
  public authorid = null;
  public authorname = null;
  public authorimage = null;
  public authormainid = null;
  public authorapprovedid = null;
  public loggedIn: boolean = false;
  public token: string = null;
  public loggedinLitsener = new Subject<{ status: boolean }>();
  public approvedLitsener = new Subject<{ status: boolean }>();

  constructor(public http: HttpClient, public route: Router) {
    this.authorid = localStorage.getItem("authorid");
    this.authormainid = localStorage.getItem("authormainid");
    //console.log("hit", this.authorid, this.authormainid);
  }

  login(values) {
    const user = {
      email: values.email,
      password: values.password
    };
    return this.http.post<{
      status: string;
      msg: string;
      payload: string;
      result: any;
    }>("https://onewater-blogapi.herokuapp.com/login", user);
  }

  getToken() {
    return this.token;
  }
  author(values) {
    const user = {
      name: values.author_name,
      email: values.author_email,
      password: values.password
    };
    return this.http.post<{
      status: string;
      msg: string;
      payload: string;
      result: any;
    }>("https://onewater-blogapi.herokuapp.com/unapproved-author", user);
  }
  checkLocalStorage() {
    //console.log("check local hit author",this.loggedIn);
    const token = localStorage.getItem("onewaterauthortoken");
    //console.log(approve, "appppppp");
    if (token) {
      //console.log("hit 1223");
      this.loggedIn = true;
      this.loggedinLitsener.next({
        status: this.loggedIn
      });
        this.token = token;
        this.authorname = localStorage.getItem("authorname");
        this.authorimage = localStorage.getItem("authorimage");
        this.authoremail = localStorage.getItem("authoremail");
        this.authormainid = localStorage.getItem("authormainid");
        this.authorapprovedid = localStorage.getItem("authorapprovedid");
    }
  }

  logout() {
    this.loggedIn = false;
    this.loggedinLitsener.next({
      status: this.loggedIn
    });
    localStorage.removeItem("onewaterauthortoken");
    localStorage.removeItem("authorname");
    localStorage.removeItem("authorimage");
    localStorage.removeItem("authoremail");
    localStorage.removeItem("authormainid");
    localStorage.removeItem("authorapprovedid");
    this.route.navigate(["/onewaterblog/author/login"]);
  }

  authLitsener() {
    return this.loggedinLitsener.asObservable();
  }
  approvedauthorLitsener() {
    return this.approvedLitsener.asObservable();
  }

  authorRegistration(values) {
    const author = new FormData();
    author.append("name", values.name);
    author.append("email", values.email);
    author.append("password", values.password);
    author.append("location", values.location);
    author.append("image", values.author_image);
    author.append("bio", values.author_bio);
    author.append("mobile", values.mobile);
    author.append("linkedIn", values.linkedin);
    author.append("twitter", values.twitter);

    console.log(this.authormainid, this.authorid, "dwdw");
    return this.http.post<{
      status: string;
      msg: string;
      payload: string;
      result: any;
    }>(
      "https://onewater-blogapi.herokuapp.com/unapproved-author",
      author
    );
  }

  authorUpdate(values) {
    const data = {
      name: values.author_name,
      location: values.location,
      bio: values.author_desc,
      imageurl: values.image,
      twitter: values.twitter,
      linkedIn: values.linkedin,
      id: this.authorapprovedid,
      mainid: this.authormainid
    };

    //console.log(this.authormainid, this.authorapprovedid, "dwdw");
    this.http
      .post(
        "https://onewater-blogapi.herokuapp.com/update-approveprofile",
        data
      )
      .subscribe(result => {
        //console.log(result);
        // alert("Profile Send For Verification You will be respond Back");
      });
  }

  authorProfileUpdateWithImage(values) {
    const author = new FormData();
    author.append("name", values.author_name);
    author.append("location", values.location);
    author.append("bio", values.author_desc);
    author.append("imageurl", values.image);
    author.append("linkedIn", values.linkedin);
    author.append("twitter", values.twitter);
    author.append("id", this.authorapprovedid);
    author.append("mainid", this.authormainid);
    //console.log(this.authormainid, this.authorapprovedid, "dwdw");
    this.http
      .post(
        "https://onewater-blogapi.herokuapp.com/update-approveprofile-with-image",
        author
      )
      .subscribe(result => {
        //console.log(result);
        // alert("Profile Send For Verification You will be respond Back");
      });
  }

  resetpassword(values) {
    return this.http.post<{ status: string; msg: string; result: any }>(
      "https://onewater-blogapi.herokuapp.com/reset-password",
      values
    );
  }

  addNewJob(values) {
    this.http
      .post("https://onewater-blogapi.herokuapp.com/createjob", values)
      .subscribe(result => {
        //console.log(result);
      });
  }
}
