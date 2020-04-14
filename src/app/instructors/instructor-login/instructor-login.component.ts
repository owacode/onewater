import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { InstructorService } from '../instructor-admin/instructor.service';
import { ModalFunctions } from '../../shared-functions/modal-functions';
import { AuthorAuthService } from 'src/app/authors/services/author-auth.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-instructor-login',
  templateUrl: './instructor-login.component.html',
  styleUrls: ['./instructor-login.component.scss']
})

export class InstructorLoginComponent implements OnInit {

  showregform() {
    this.modal.hideBtnLoader();
    document.querySelector(".vldauth")['style'].display = "none";
    document.querySelector(".vldreg")['style'].display = "flex";
    document.getElementById("login-text")['style'].display = "none"
    document.getElementById("signup-text")['style'].display = "block"
  }

  showauthform() {
    this.modal.hideBtnLoader();
    document.querySelector(".vldauth")['style'].display = "flex";
    document.querySelector(".vldreg")['style'].display = "none";
    document.querySelector(".vldrecpass")['style'].display = "none";
    document.getElementById("login-text")['style'].display = "block"
    document.getElementById("signup-text")['style'].display = "none"
  }

  showrecoveryform() {
    document.querySelector(".vldauth")['style'].display = "none";
    document.querySelector(".vldrecpass")['style'].display = "flex";
    document.getElementById("login-text")['style'].display = "none"
    document.getElementById("signup-text")['style'].display = "none"
  }

  constructor(public http:HttpClient, public route: Router, public instructorservice: InstructorService, public authorservice: AuthorAuthService,public auth:AuthService , public modal : ModalFunctions, public state: ActivatedRoute) { }
  user: FormGroup;
  loginuser: FormGroup;
  resetpassform: FormGroup;
  loginsubmitted: boolean = false;
  registersubmitted:boolean=false;
  resetpasssubmitted: boolean = false;

  toRender;
  ngOnInit() {

    this.state.params.subscribe(result => {this.toRender = result.state});
    if(this.toRender == 'login'){
      this.showauthform();
    }
    else {
      this.showregform();
    }

    this.user = new FormGroup({
      name:new FormControl(null,{validators:[Validators.required]}),
      email:new FormControl(null,{validators:[Validators.required,Validators.email]}),
      password:new FormControl(null,{validators:[Validators.required, Validators.minLength(6)]}),
      cpassword:new FormControl(null,{validators:[Validators.required]})
    });

    this.loginuser= new FormGroup({
      email:new FormControl(null,{validators:[Validators.required,Validators.email]}),
      password:new FormControl(null,{validators:[Validators.required, Validators.minLength(6)]}),
    });

    this.resetpassform = new FormGroup({
      email: new FormControl(null, { validators: [Validators.required, Validators.email] })
    });
  }

  register(){
    this.registersubmitted=true;
    console.log(this.user.value);
    if(this.user.invalid){
      this.modal.hideBtnLoader();
      console.log("details invalid")
      return;
    }

    if(this.user.value.password != this.user.value.cpassword)
    {
      this.modal.hideBtnLoader();
      this.modal.openModal("#passModal");
      return;
    }
    console.log('pass',this.user.value);

    this.http.post('https://onewater-instructor-api.herokuapp.com/addinstructor',this.user.value)
    .subscribe(result=>{
      if(result['status'] == "error"){
        console.log("User already exist", result)
        this.modal.hideBtnLoader();
        this.modal.openModal("#signupFail");
      }
      else if (result['status'] == "success"){
        console.log("User Added succssfully", result);
        this.modal.hideBtnLoader();
        this.modal.openModal("#signupSuccess");
      }
    })
  }

  login(){
    // if(this.auth.access_token != null || localStorage.getItem('authoremail')){
    //   this.modal.hideBtnLoader();
    //   this.modal.openModal('#platformModal');
    //   return;
    // }
    this.loginsubmitted = true;
    console.log(this.loginuser.value);
    if(this.loginuser.invalid){
      this.modal.hideBtnLoader();
      console.log("invalid details");
      return;
    }
    //console.log('pass',this.loginuser.value);

    this.http.post<{msg:string, result:any}>('https://onewater-instructor-api.herokuapp.com/login',this.loginuser.value)
    .subscribe(result=>{
      this.instructorservice.userid=result.result.user.id;
      this.instructorservice.useremail=result.result.user.email;
      this.instructorservice.username=result.result.user.name;
      this.instructorservice.user=result.result.user;
      localStorage.setItem('instructor_id',this.instructorservice.userid);
      localStorage.setItem('instructor_name',this.instructorservice.username);
      localStorage.setItem('instructor_email',this.instructorservice.useremail);
      console.log("User Login Successfully", result);

      if(result.result == 'Incorrect Password' || result.result == 'No User Found') {
        this.modal.hideBtnLoader();
        this.modal.openModal("#invalidModal");
        return;
      }

      if(result.result == 'User Email not Verified') {
        console.log("email not verified")
        this.modal.hideBtnLoader();
        this.modal.openModal("#loginModal");
        return;
      };

      if(!result.result.form_filled)
      this.route.navigate(['/instructor-reg']);

      else if(result.result.status == 'pending')
      {
        console.log("waiting to be approved by admin");
        this.modal.hideBtnLoader();
        this.modal.openModal("#pendingModal");
        return;
      }

      else
      this.route.navigate(['/instructor-admin']);
    })
  }

  resetpassword() {
    this.resetpasssubmitted = true;
    console.log(this.resetpassform.value,'instructor');
    if(this.resetpassform.invalid){
      console.log('invalid reset form');
      this.modal.hideBtnLoader();
      return;
    }

    this.http.post<{status: string, msg: string, result: any}>('https://onewater-instructor-api.herokuapp.com/reset-password',this.resetpassform.value)
    .subscribe(result=> {
      console.log(result);
      this.modal.openModal('#forgotpassModal');
      this.modal.hideBtnLoader();
    })
  }
}

