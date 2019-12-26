import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  form:FormGroup;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    Feather.replace();
    this.form= new FormGroup({
      name:new FormControl(null, {validators:[Validators.required]}),
      email:new FormControl(null, {validators:[Validators.required]}),
    })
  }

  subscribe(){
    console.log(this.form.value)
    this.http.post('https://onewater-job-api.herokuapp.com/suscribed',this.form.value)
    .subscribe(result=>{
      //alert("Thanks for Subscribing!");
      console.log(result,'suscribed');
    })
  }

}
