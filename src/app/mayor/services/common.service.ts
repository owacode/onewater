import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { MayorAuthService } from "./mayor-auth.service";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(
    public mayorauth: MayorAuthService,
    public http: HttpClient,
    public route: Router
  ) {}
}
