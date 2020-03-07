import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MayorAuthService {
  public mayoremail = null;
  public mayorid = null;
  public mayorname = null;
  public mayorimage = null;
  public mayormainid = null;
  public mayorapprovedid = null;
  public loggedIn: boolean = false;
  public token: string = null;
  public loggedinLitsener = new Subject<{ status: boolean }>();
  public approvedLitsener = new Subject<{ status: boolean }>();

  constructor(public http: HttpClient, public route: Router) {}

  checkLocalStorage(){
    console.log('mayor check local hit')
    const token=localStorage.getItem('onewatermayortoken');
    const approve=localStorage.getItem('mayorapprovedid');
    console.log(approve,'appppppp')
        if(token){
          console.log('hit 1223')
          this.loggedIn=true
          this.loggedinLitsener.next({
              status:this.loggedIn
          })
          if(localStorage.getItem('form_filled_mayor') == 'true'){
            console.log('check local hit ifffffffff',localStorage.getItem('form_filled_mayor'))
            this.token=token;
            this.mayorid=localStorage.getItem('mayorid');
            this.mayorname=localStorage.getItem('mayorname');
            this.mayoremail=localStorage.getItem('mayoremail');
            this.mayormainid=localStorage.getItem('mayormainid');
            this.mayorimage=localStorage.getItem('mayorimage');
            if(!approve) return this.route.navigate(['/onewaterblog/mayor-reg']);;
            this.mayorapprovedid=localStorage.getItem('mayorapprovedid');
            console.log("hit", this.mayorid, this.mayormainid,this.mayorapprovedid);
            this.route.navigate(['/mayor']);
          }else{
            console.log('check local hit elseeeeeeeeeeee')
            this.token=token;
            this.mayorid=localStorage.getItem('mayorid');
            this.mayorname=localStorage.getItem('mayorname');
            this.mayorimage=localStorage.getItem('mayorimage');
            this.mayoremail=localStorage.getItem('mayoremail');
            this.mayormainid=localStorage.getItem('mayormainid');
            this.mayorapprovedid=localStorage.getItem('mayorapprovedid');
            this.route.navigate(['/onewaterblog/mayor-reg']);
          }
        }
  }

  addMayor(values) {
    const user = {
      name: values.mayor_name,
      email: values.mayor_email,
      password: values.password
    };
    return this.http.post<{
      status: string;
      msg: string;
      payload: string;
      result: any;
    }>("https://onewater-mayor.herokuapp.com/unapproved-mayor", user);
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
    }>("https://onewater-mayor.herokuapp.com/login", user);
  }

  mayorRegistration(values){
    const mayor= new FormData();
    mayor.append('name',localStorage.getItem('mayorname'))
    mayor.append('email',localStorage.getItem('mayoremail'))
    mayor.append('location',values.location)
    mayor.append('image',values.mayor_image)
    mayor.append('bio',values.mayor_bio)
    mayor.append('mobile',values.mobile);
    mayor.append('linkedIn',values.linkedin)
    mayor.append('twitter',values.twitter)
    mayor.append('id',this.mayorid)
    mayor.append('mainid',this.mayormainid)

    console.log(this.mayormainid, this.mayorid,'dwdw');
    return this.http.post('https://onewater-mayor.herokuapp.com/update-mayorprofile',mayor);

  }

  mayorUpdate(values) {
    const data = {
      name: values.mayor_name,
      location: values.location,
      bio: values.mayor_desc,
      imageurl: values.image,
      twitter: values.twitter,
      linkedIn: values.linkedin,
      id: this.mayorapprovedid,
      mainid: this.mayormainid
    };

    console.log(this.mayormainid, this.mayorapprovedid, "dwdw");
    this.http
      .post(
        "https://onewater-mayor.herokuapp.com/update-approveprofile",
        data
      )
      .subscribe(result => {
        console.log(result);
        // alert("Profile Send For Verification You will be respond Back");
      });
  }

  mayorProfileUpdateWithImage(values) {
    const mayor = new FormData();
    mayor.append("name", values.mayor_name);
    mayor.append("location", values.location);
    mayor.append("bio", values.mayor_desc);
    mayor.append("imageurl", values.image);
    mayor.append("linkedIn", values.linkedin);
    mayor.append("twitter", values.twitter);
    mayor.append("id", this.mayorapprovedid);
    mayor.append("mainid", this.mayormainid);
    console.log(this.mayormainid, this.mayorapprovedid, "dwdw");
    this.http
      .post(
        "https://onewater-mayor.herokuapp.com/update-approveprofile-with-image",
        mayor
      )
      .subscribe(result => {
        console.log(result);
        // alert("Profile Send For Verification You will be respond Back");
      });
  }

  logout(){
    this.loggedIn=false;
    this.loggedinLitsener.next({
      status:this.loggedIn
  })
  localStorage.removeItem('onewatermayortoken');
  localStorage.removeItem('mayorid');
  localStorage.removeItem('mayoremail');
  localStorage.removeItem('mayormainid');
  localStorage.removeItem('mayorapprovedid');
  localStorage.removeItem('mayorimage');
  localStorage.removeItem('mayorname');
  localStorage.removeItem('form_filled_mayor');
  this.route.navigate(['/onewaterblog/mayor-login'])
  }

  resetpassword(values) {
    return this.http.post<{ status: string; msg: string; result: any }>(
      "https://onewater-mayor.herokuapp.com/reset-password",
      values
    );
  }

  getUser() {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewater-mayor.herokuapp.com/single-mayor/" +
        this.mayorapprovedid
    );
  }
}
