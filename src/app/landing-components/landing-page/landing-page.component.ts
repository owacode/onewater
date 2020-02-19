import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import * as $ from 'jquery';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  form:FormGroup;
  public submited: Boolean = false;
  constructor(public http:HttpClient) { }

  ngOnInit() {

    if(localStorage.getItem("triggerBlogModal") == "false"){
      $('#blogModal').css("display", "block");
      $('#blogModal').addClass("show");
      $('.overlay').css("display", "block");
      localStorage.removeItem("triggerBlogModal");
    }

    Feather.replace();
    this.form= new FormGroup({
      name:new FormControl(null, {validators:[Validators.required]}),
      email:new FormControl(null, {validators:[Validators.required,Validators.email]}),
    })
  }

  closeModal(thismodal) {
    console.log('close Modal')
    $(thismodal).css("display", "none");
    $(thismodal).removeClass("show");
    $('.overlay').css("display", "none");
  }

  subscribe(){
    this.submited = true;
    console.log(this.form.value);
    if(this.form.invalid){
      console.log("Invalid Newsletter");
      return;
    }
    this.http.post('https://onewater-job-api.herokuapp.com/subscribe',this.form.value)
    .subscribe(result=>{
      console.log(result,'suscribed');
    })
  }

}
