import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Router} from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class AdderOperationService {
  constructor(public http:HttpClient, public route: Router){}

  addNewJob(values){
    this.http.post('https://onewater-job-api.herokuapp.com/createjob',values)
    .subscribe(result=> {
      console.log(result);
    })
  }

  updateJob(values){
    this.http.post('https://onewater-job-api.herokuapp.com/updatejob',values)
    .subscribe(result=> {
      console.log(result);
    })
  }
}
