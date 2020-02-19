import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn:boolean=false;
  access_token=null;
  id_token=null;
  picture=null;
  nickname=null;
  name=null;
  user_id=null;

  constructor(){}

  isUserAuthenticated(){
    return this.isLoggedIn;
}

}
