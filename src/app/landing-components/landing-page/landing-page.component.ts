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
  
  }



}
