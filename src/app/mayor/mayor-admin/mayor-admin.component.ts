import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import * as $ from "jquery";
import { MayorAuthService } from '../services/mayor-auth.service';

@Component({
  selector: 'app-mayor-admin',
  templateUrl: './mayor-admin.component.html',
  styleUrls: ['./mayor-admin.component.scss']
})

export class MayorAdminComponent implements OnInit {

  constructor(public auth: MayorAuthService) { }


  ngOnInit() {
    this.auth.checkLocalStorage();
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

  logout(){
    this.auth.logout();
  }

}
