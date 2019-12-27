import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
@Injectable()
export class Authguard implements CanActivate {

    loginstatus:boolean=false;

    constructor(private authuser:AuthService ,public router:Router){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        boolean | Observable <boolean>  | Promise <boolean> {
            this.loginstatus=this.authuser.isUserAuthenticated()

            //console.log(userlog);

            if(!this.loginstatus){
                console.log('not logged in');
                alert("Please Login To See the Blog")
                this.router.navigate(['/home']);
            }
            return true;

        }

}
