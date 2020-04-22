import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import { AuthService } from '../auth.service';
import { ModalFunctions } from '../shared-functions/modal-functions';
import { AuthorAuthService } from '../authors/services/author-auth.service';
@Injectable()
export class Authguard implements CanActivate {
    loginstatus:boolean=false;
    constructor(private authuser:AuthService ,public router:Router, public modal: ModalFunctions, public author:AuthorAuthService){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        boolean | Observable <boolean>  | Promise <boolean> {
            this.loginstatus=this.authuser.isUserAuthenticated()

            //console.log(userlog);

            if(!(this.author.loggedIn||this.authuser.isLoggedIn)){
                console.log('not logged in');
                this.modal.openModal("#blogModal");
                return false;
            }

            return true;

        }

}
