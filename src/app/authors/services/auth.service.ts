import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Router} from '@angular/router';
import { Subject } from 'rxjs';
import * as $ from 'jquery';

@Injectable({
  providedIn:'root'
})
export class AuthService {
  constructor(public http:HttpClient, public route: Router){}
  public authoremail;
  public authorid;
  public authorname;
  public authorimage;
  public authormainid;
  public authorapprovedid;
  public loggedIn:boolean=false;
  private token:string=null;
  public loggedinLitsener=new Subject<{status:boolean}>();
  public approvedLitsener=new Subject<{status:boolean}>();
  // Observable string sources
  private emailexistCallSource = new Subject<any>();
  emailexist$ = this.emailexistCallSource.asObservable();

  private notverifiedCallSource = new Subject<any>();
  notverifiedmail$ = this.notverifiedCallSource.asObservable();

  private verifymailCallSource = new Subject<any>();
  verifymail$ = this.verifymailCallSource.asObservable();


  login(values){
    const user={
      email:values.email,
      password:values.password
    }
    this.http.post<{status:string, msg:string, payload:string, result:any}>('https://onewater-blog-api.herokuapp.com/login', user)
    .subscribe(result=> {


      if(result.status == 'error'){
        if(result.msg='User Email not Verified') this.notverifiedCallSource.next();

        // if(result.msg='No User Found') this.emailexistCallSource.next();
      }
      console.log(result);
      if(result.status =='error') return;
      this.authoremail=result.result.email;
      this.authorid=result.result.id;
      this.authorname=result.result.name
      this.authormainid=result.result.mainid;
      this.authorapprovedid=result.result.approvedid;
      if(result.result.form_filled){
        localStorage.setItem('onewaterauthortoken',result.result.token)
        localStorage.setItem('authoremail',this.authoremail)
        localStorage.setItem('authorid',this.authorid)
        localStorage.setItem('authormainid',this.authormainid)
        localStorage.setItem('name',result.result.name)
        localStorage.setItem('image',result.result.image)
        localStorage.setItem('form_filled_job',result.result.form_filled)
        if(result.result.approvedid=='null') {
          // return(alert("Profile Not Approved Yet"));
          this.approvedLitsener.next({
            status:false
          })
         return this.route.navigate(['/onewaterblog/author-reg']);
        }
        this.approvedLitsener.next({
          status:true
        })
        localStorage.setItem('authorapprovedid',this.authorapprovedid)
        this.route.navigate(['/author']);
      }else{
        localStorage.setItem('onewaterauthortoken',result.result.token)
        localStorage.setItem('name',result.result.name)
        localStorage.setItem('image',result.result.image)
        localStorage.setItem('authoremail',this.authoremail)
        localStorage.setItem('authorid',this.authorid)
        localStorage.setItem('authormainid',this.authormainid)
        localStorage.setItem('form_filled_job',result.result.form_filled)
        this.route.navigate(['/onewaterblog/author-reg']);
      }
    })
  }

  getToken(){
    return this.token;
}
  author(values){
    const user={
      name:values.author_name,
      email:values.author_email,
      password:values.password
    }
    this.http.post<{status:string, msg:string, payload:string, result:any}>('https://onewater-blog-api.herokuapp.com/unapproved-author', user)
    .subscribe(result=> {
      if(result.status == 'error'){
        if(result.msg='No User Found') this.emailexistCallSource.next();

        // if(result.msg='No User Found') this.emailexistCallSource.next();
      }

      if(result.status == 'success') this.verifymailCallSource.next();
      console.log(result);
    })
  }
  checkLocalStorage(){
    console.log('check local hit')
    const token=localStorage.getItem('onewaterauthortoken');
    const approve=localStorage.getItem('authorapprovedid');
    console.log(approve,'appppppp')
        if(token){
          console.log('hit 1223')
          this.loggedIn=true
          this.loggedinLitsener.next({
              status:this.loggedIn
          })
          if(localStorage.getItem('form_filled_job') == 'true'){
            console.log('check local hit ifffffffff',localStorage.getItem('form_filled_job'))
            this.token=token;
            this.authorid=localStorage.getItem('authorid');
            this.authorname=localStorage.getItem('name');
            this.authoremail=localStorage.getItem('authoremail');
            this.authormainid=localStorage.getItem('authormainid');
            this.authorimage=localStorage.getItem('image');
            if(!approve) return this.route.navigate(['/onewaterblog/author-reg']);;
            this.authorapprovedid=localStorage.getItem('authorapprovedid');
            this.route.navigate(['/author']);
          }else{
            console.log('check local hit elseeeeeeeeeeee')
            this.token=token;
            this.authorid=localStorage.getItem('authorid');
            this.authorname=localStorage.getItem('name');
            this.authorimage=localStorage.getItem('image');
            this.authoremail=localStorage.getItem('authoremail');
            this.authormainid=localStorage.getItem('authormainid');
            this.authorapprovedid=localStorage.getItem('authorapprovedid');
            this.route.navigate(['/onewaterblog/author-reg']);
          }
        }
}

logout(){
  this.loggedIn=false;
  this.loggedinLitsener.next({
    status:this.loggedIn
})
localStorage.removeItem('onewaterauthortoken');
localStorage.removeItem('authorid');
localStorage.removeItem('authoremail');
localStorage.removeItem('authormainid');
localStorage.removeItem('authorapprovedid');
localStorage.removeItem('image');
localStorage.removeItem('name');
this.route.navigate(['/onewaterblog/author-login'])
}

authLitsener(){
  return this.loggedinLitsener.asObservable();
}
approvedauthorLitsener(){
  return this.approvedLitsener.asObservable();
}



  authorRegistration(values){
    const author= new FormData();
    author.append('name',localStorage.getItem('name'))
    author.append('email',localStorage.getItem('authoremail'))
    author.append('location',values.location)
    author.append('author_image',values.author_image)
    author.append('about_author',values.author_desc)
    author.append('interest_category',values.interest);
    author.append('mobile',values.mobile);
    author.append('facebook',values.facebook)
    author.append('linkedIn',values.linkedin)
    author.append('twitter',values.twitter)
    author.append('instagram',values.instagram)
    author.append('id',this.authorid)
    author.append('mainid',this.authormainid)

    console.log(this.authormainid, this.authorid,'dwdw');
    this.http.post('https://onewater-blog-api.herokuapp.com/update-authorprofile',author)
    .subscribe(result=> {
      console.log(result);
      // alert("Profile Send For Verification You will be respond Back");
    })
  }

  authorUpdate(values){
    const author= new FormData();
    author.append('name',values.author_name)
    author.append('location',values.location)
    author.append('author_image',values.author_image)
    author.append('about_author',values.author_desc)
    author.append('interest_category',values.interest);
    author.append('mobile',values.mobile);
    author.append('facebook',values.facebook)
    author.append('linkedIn',values.linkedin)
    author.append('twitter',values.twitter)
    author.append('instagram',values.instagram)
    author.append('id',this.authorapprovedid)
    author.append('mainid',this.authormainid)

    const data={
      name:values.author_name,
      location:values.location,
      about_author:values.author_desc,
      interest_category:values.interest,
      facebook:values.facebook,
      twitter:values.twitter,
      linkedIn:values.linkedin,
      instagram:values.instagram,
      id:this.authorapprovedid,
      mainid:this.authormainid
    }

    console.log(this.authormainid, this.authorapprovedid,'dwdw');
    this.http.post('https://onewater-blog-api.herokuapp.com/update-approveprofile',data)
    .subscribe(result=> {
      console.log(result);
      // alert("Profile Send For Verification You will be respond Back");
    })
  }
  addNewJob(values){
    this.http.post('https://onewater-blog-api.herokuapp.com/createjob',values)
    .subscribe(result=> {
      console.log(result);
    })
  }
}
