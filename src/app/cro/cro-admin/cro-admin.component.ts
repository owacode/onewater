import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import * as $ from "jquery";
import { CROAuthService } from '../services/cro-auth.service';

@Component({
  selector: 'app-cro-admin',
  templateUrl: './cro-admin.component.html',
  styleUrls: ['./cro-admin.component.scss']
})
export class CroAdminComponent implements OnInit {

  constructor(public auth: CROAuthService) { }

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
