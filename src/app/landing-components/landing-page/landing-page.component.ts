import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import * as $ from 'jquery';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  form:FormGroup;
  public submited: Boolean = false;
  constructor(public http:HttpClient, public modal: ModalFunctions) { }

  ngOnInit() {

    if(localStorage.getItem("triggerBlogModal") == "false"){
      this.modal.openModal("#blogModal");
      localStorage.removeItem("triggerBlogModal");
    }

    Feather.replace();
    this.form= new FormGroup({
      name:new FormControl(null, {validators:[Validators.required]}),
      email:new FormControl(null, {validators:[Validators.required,Validators.email]}),
    })
  }

  subscribe(){
    this.submited = true;
    console.log(this.form.value);
    if(this.form.invalid){
      console.log("Invalid newsletter details");
      this.modal.hideBtnLoader();
      return;
    }
    this.http.post<{ status: string}>('https://onewater-job-api.herokuapp.com/subscribe',this.form.value)
    .subscribe(result=>{
      if(result.status == "error"){
        console.log(result,'already suscribed');
        this.modal.hideBtnLoader();
        this.modal.closeModal('#subscribeModal');
        this.modal.openModal("#alreadysubscribedmodal");
        return;
      }

      console.log(result,'suscribed successfully');
      this.modal.hideBtnLoader();
      this.modal.closeModal('#subscribeModal');
      this.modal.openModal("#thanksmodal");
    })
  }

}
