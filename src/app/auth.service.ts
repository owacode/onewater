import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedIn: boolean = false;
  access_token = null;
  token = null;
  picture = null;
  nickname = null;
  name = null;
  user_id = null;

  constructor(public http: HttpClient, public route: Router) {}

  isUserAuthenticated() {
    return this.isLoggedIn;
  }

  checkLocalStorage() {
    this.token = localStorage.getItem('onewaterusertoken');
    //console.log(this.token,'auth ######')
    if (!this.token) {
      return;
    }
    this.isLoggedIn = true;
    this.user_id = localStorage.getItem('onewateruserid');
    this.name = localStorage.getItem('onewaterusername');
  }

  login(values) {
    const user = {
      email: values.email,
      password: values.password,
    };
    return this.http.post<{
      status: string;
      msg: string;
      payload: string;
      result: any;
    }>("https://onewater-blogapi.herokuapp.com/login", user);
  }

  resetpassword(values) {
    return this.http.post<{ status: string; msg: string; result: any }>(
      "https://onewater-blogapi.herokuapp.com/reset-password",
      values
    );
  }

  logout() {
     this.isLoggedIn = false;
     this.token=null;
     this.user_id=null;
     localStorage.removeItem("onewaterusertoken");
     localStorage.removeItem("onewateruserid");
     localStorage.removeItem("onewaterusername");
     this.route.navigate(['/login']);
  }
}
