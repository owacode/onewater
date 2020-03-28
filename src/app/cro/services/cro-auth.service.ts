import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CROAuthService {
  public croemail = null;
  public croid = null;
  public croname = null;
  public croimage = null;
  public cromainid = null;
  public croapprovedid = null;
  public loggedIn: boolean = false;
  private token: string = null;
  public loggedinLitsener = new Subject<{ status: boolean }>();
  public approvedLitsener = new Subject<{ status: boolean }>();

  constructor(public http: HttpClient, public route: Router) {
    this.croid = localStorage.getItem("croid");
    this.cromainid = localStorage.getItem("cromainid");
    console.log("hit", this.croid, this.cromainid);
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
    }>("https://onewater-cro.herokuapp.com/login", user);
  }

  getToken() {
    return this.token;
  }

  cro(values) {
    const user = {
      name: values.cro_name,
      email: values.cro_email,
      password: values.password
    };
    return this.http.post<{
      status: string;
      msg: string;
      payload: string;
      result: any;
    }>("https://onewater-cro.herokuapp.com/unapproved-cro", user);
  }

  checkLocalStorage() {
    console.log("check local hit");
    const token = localStorage.getItem("onewatercrotoken");
    const approve = localStorage.getItem("croapprovedid");
    console.log(approve, "appppppp");
    if (token) {
      console.log("hit 1223");
      this.loggedIn = true;
      this.loggedinLitsener.next({
        status: this.loggedIn
      });
      if (localStorage.getItem("form_filled_cro") == "true") {
        console.log(
          "check local hit ifffffffff",
          localStorage.getItem("form_filled_cro")
        );
        this.token = token;
        this.croid = localStorage.getItem("croid");
        this.croname = localStorage.getItem("croname");
        this.croemail = localStorage.getItem("croemail");
        this.cromainid = localStorage.getItem("cromainid");
        this.croimage = localStorage.getItem("croimage");
        if (!approve) return this.route.navigate(["/onewaterblog/cro-reg"]);
        this.croapprovedid = localStorage.getItem("croapprovedid");
        this.route.navigate(["/cro"]);
      } else {
        console.log("check local hit elseeeeeeeeeeee");
        this.token = token;
        this.croid = localStorage.getItem("croid");
        this.croname = localStorage.getItem("croname");
        this.croimage = localStorage.getItem("croimage");
        this.croemail = localStorage.getItem("croemail");
        this.cromainid = localStorage.getItem("cromainid");
        this.croapprovedid = localStorage.getItem("croapprovedid");
        this.route.navigate(["/onewaterblog/cro-reg"]);
      }
    }
  }

  logout() {
    this.loggedIn = false;
    this.loggedinLitsener.next({
      status: this.loggedIn
    });
    localStorage.removeItem("onewatercrotoken");
    localStorage.removeItem("croid");
    localStorage.removeItem("croemail");
    localStorage.removeItem("cromainid");
    localStorage.removeItem("croapprovedid");
    localStorage.removeItem("croimage");
    localStorage.removeItem("croname");
    localStorage.removeItem("form_filled_cro");
    this.route.navigate(["/onewaterblog/cro/login"]);
  }

  authLitsener() {
    return this.loggedinLitsener.asObservable();
  }

  approvedcroLitsener() {
    return this.approvedLitsener.asObservable();
  }

  croRegistration(values) {
    const cro = new FormData();
    cro.append("name", localStorage.getItem("croname"));
    cro.append("email", localStorage.getItem("croemail"));
    cro.append("location", values.location);
    cro.append("image", values.cro_image);
    cro.append("bio", values.cro_bio);
    cro.append("mobile", values.mobile);
    cro.append("linkedIn", values.linkedin);
    cro.append("twitter", values.twitter);
    cro.append("id", this.croid);
    cro.append("mainid", this.cromainid);

    console.log(this.cromainid, this.croid, "dwdw");
    return this.http.post("https://onewater-cro.herokuapp.com/update-croprofile", cro);
  }

  croUpdate(values) {
    const data = {
      name: values.cro_name,
      location: values.location,
      bio: values.cro_desc,
      imageurl: values.image,
      twitter: values.twitter,
      linkedIn: values.linkedin,
      id: this.croapprovedid,
      mainid: this.cromainid
    };

    console.log(this.cromainid, this.croapprovedid, "dwdw");
    this.http
      .post("https://onewater-cro.herokuapp.com/update-approveprofile", data)
      .subscribe(result => {
        console.log(result);
        // alert("Profile Send For Verification You will be respond Back");
      });
  }

  croProfileUpdateWithImage(values) {
    const cro = new FormData();
    cro.append("name", values.cro_name);
    cro.append("location", values.location);
    cro.append("bio", values.cro_desc);
    cro.append("imageurl", values.image);
    cro.append("linkedIn", values.linkedin);
    cro.append("twitter", values.twitter);
    cro.append("id", this.croapprovedid);
    cro.append("mainid", this.cromainid);
    console.log(this.cromainid, this.croapprovedid, "dwdw");
    this.http
      .post("https://onewater-cro.herokuapp.com/update-approveprofile-with-image", cro)
      .subscribe(result => {
        console.log(result);
        // alert("Profile Send For Verification You will be respond Back");
      });
  }

  resetpassword(values) {
    return this.http.post<{ status: string; msg: string; result: any }>(
      "https://onewater-cro.herokuapp.com/reset-password",
      values
    );
  }
}
