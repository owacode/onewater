import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable({
  providedIn:'root'
})

export class InstructorService {
  constructor (private router: Router) {}

  userid=null;
  useremail=null;

  checklocalstorage(){
    console.log("checking Localstorage Instructor")
    let instructorid= localStorage.getItem('instructor_id');
    if(instructorid){
      this.userid = instructorid;
      this.useremail = localStorage.getItem('instructor_email');
      console.log("Initliaze Instructor detail", this.useremail, this.userid);
    }
    else return;
  }

  logout(){
    localStorage.removeItem('instructor_id');
    localStorage.removeItem('instructor_email');
    this.userid= null;
    this.useremail =null;
    console.log("instructor logged out");
    this.router.navigate(["/instructor/login"]);
  }
}
