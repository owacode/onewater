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
  private token: string = null;
  public loggedinLitsener = new Subject<{ status: boolean }>();
  public approvedLitsener = new Subject<{ status: boolean }>();

  constructor(public http: HttpClient, public route: Router) {
    this.mayorid = localStorage.getItem("mayorid");
    this.mayormainid = localStorage.getItem("mayormainid");
    console.log("hit", this.mayorid, this.mayormainid);
  }

  checkLocalStorage(){
    console.log('check local hit')
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
}
