import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(
    public http: HttpClient,
    public route: Router,
  ) {}

}
