import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class InstructorService {
  constructor(private router: Router, public http: HttpClient) {}

  user = null;
  userid = null;
  username = null;
  useremail = null;

  checklocalstorage() {
    console.log("checking Localstorage Instructor");
    let instructorid = localStorage.getItem("instructor_id");
    if (instructorid) {
      this.userid = instructorid;
      this.useremail = localStorage.getItem("instructor_email");
      this.username = localStorage.getItem("instructor_name");
      console.log("Initliaze Instructor detail", this.useremail, this.userid);
    } else return;
  }

  logout() {
    localStorage.removeItem("instructor_id");
    localStorage.removeItem("instructor_email");
    this.userid = null;
    this.useremail = null;
    console.log("instructor logged out");
    this.router.navigate(["/instructor/login"]);
  }

  registerInstructor(values) {
    return this.http.post(
      "https://onewater-instructor-api.herokuapp.com/register-instructor",
      values
    );
  }

  registerInstructorForDrawing(values) {
    return this.http.post(
      "https://onewater-instructor-api.herokuapp.com/register-drawing",
      values
    );
  }
}
