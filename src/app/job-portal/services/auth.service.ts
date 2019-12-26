import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Router} from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class AuthJobService {
  constructor(public http:HttpClient, public route: Router){}
  public companyemail;
  public companyid;
  public loggedIn:boolean=false;
  public token:string=null;
  public loggedinLitsener=new Subject<{status:boolean}>();

  getToken(){
    return this.token;
}
  employee(values){
    const user={
      company_name:values.company_name,
      email:values.company_email,
      password:values.password
    }
    this.http.post('https://onewater-job-api.herokuapp.com/addcompany', user)
    .subscribe(result=> {
      console.log(result);
    })
  }
  checkLocalStorage(){
    console.log('checklocal')
    const token=localStorage.getItem('onewaterjobtoken');
        if(token){
          console.log('hit 1223')
          this.loggedIn=true
          this.loggedinLitsener.next({
              status:this.loggedIn
          })
          if(localStorage.getItem('form_filled_job') == 'true'){
            this.token=token;
            this.companyemail=localStorage.getItem('companyemail')
            this.companyid=localStorage.getItem('companyid')
            this.route.navigate(['/onewaterjobs/employer']);
          }else{
            this.token=token;
            this.companyemail=localStorage.getItem('companyemail')
            this.companyid=localStorage.getItem('companyid')
            this.route.navigate(['/onewaterjobs/emp-login']);
          }
        }
}

logout(){
  localStorage.removeItem('onewaterjobtoken');
  localStorage.removeItem('companyemail');
  localStorage.removeItem('companyid');
  this.route.navigate(['/onewaterjobs']);
}

authLitsener(){
  return this.loggedinLitsener.asObservable();
}
  login(values){
    const user={
      email:values.email,
      password:values.password
    }
    this.http.post<{status:string, msg:string, result:any}>('https://onewater-job-api.herokuapp.com/login', user)
    .subscribe(result=> {
      console.log(result);
      this.token=result.result.token;
      this.companyemail=result.result.email;
      this.companyid=result.result.id;
      if(result.result.form_filled){
        localStorage.setItem('onewaterjobtoken',result.result.token)
        localStorage.setItem('companyemail',this.companyemail)
        localStorage.setItem('companyid',this.companyid)
        localStorage.setItem('form_filled_job',result.result.form_filled)
        this.route.navigate(['/onewaterjobs/employer']);
      }else{
        localStorage.setItem('onewaterjobtoken',result.result.token)
        localStorage.setItem('companyemail',this.companyemail)
        localStorage.setItem('companyid',this.companyid)
        localStorage.setItem('form_filled_job',result.result.form_filled)
        this.route.navigate(['/onewaterjobs/emp-reg']);
      }
    })
  }

  employeeCompanyRegistration(values){
    const company= new FormData();
    company.append('company_address',values.company_address)
    company.append('company_logo',values.company_logo)
    company.append('company_website',values.company_website)
    company.append('company_description',values.company_description)
    company.append('location',values.company_address)
    company.append('date_establish',values.date_establish)
    company.append('working_area',values.working_area)
    company.append('facebook',values.facebook)
    company.append('linkedin',values.linkedin)
    company.append('twitter',values.twitter)
    company.append('mobile',values.mobile)
    company.append('category',values.category)
    company.append('email',this.companyemail)

    this.http.post('https://onewater-job-api.herokuapp.com/addcompanydetails',company)
    .subscribe(result=> {
      console.log(result);
      alert("company registered now you can login as an employer");
    })
  }

  addNewJob(values){
    this.http.post('https://onewater-job-api.herokuapp.com/createjob',values)
    .subscribe(result=> {
      console.log(result);
    })
  }
}
