import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import * as $ from "jquery";

@Component({
  selector: 'app-mayor-cro-admin',
  templateUrl: './mayor-cro-admin.component.html',
  styleUrls: ['./mayor-cro-admin.component.scss']
})
export class MayorCroAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let filter = document.querySelector('.filter-btn a');
    let optionBox = document.querySelector('.dashboard-sidebar');
    let options = document.querySelectorAll('.dashboard-sidebar .dashboard-menu ul li a');
    $(filter).on("click",function(){
         $(optionBox).toggleClass("slide-in");
    });
    $(options).on("click",function(){
         $(optionBox).toggleClass("slide-in");
    });

    Feather.replace();

  }

}
