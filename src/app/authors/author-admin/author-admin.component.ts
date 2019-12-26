import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import * as $ from "jquery";
import { CommonService } from '../services/common.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-author-admin',
  templateUrl: './author-admin.component.html',
  styleUrls: ['./author-admin.component.scss']
})
export class AuthorAdminComponent implements OnInit {

  constructor(public common:CommonService, public auth: AuthService) { }
  author;

  ngOnInit() {
    this.auth.checkLocalStorage();
    this.common.getUser()
    .subscribe(result=>{
      console.log(result)
      this.author=result.result[0];
    })
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
