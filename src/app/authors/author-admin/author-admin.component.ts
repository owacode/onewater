import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { CommonService } from '../services/common.service';
import { AuthorAuthService } from '../services/author-auth.service';

@Component({
  selector: 'app-author-admin',
  templateUrl: './author-admin.component.html',
  styleUrls: ['./author-admin.component.scss']
})
export class AuthorAdminComponent implements OnInit {

  constructor(public common:CommonService, public auth: AuthorAuthService) { }
  author;

  toggleDropdown(element){
    var panel = document.getElementById(element);
    if (panel.style.display === "none") {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }
}

  ngOnInit() {
    this.auth.checkLocalStorage();
    this.common.getUser()
    .subscribe(result=>{
      //console.log(result)
      this.author=result.result[0];
    })
    let toggleButton = document.querySelector('.sidebar-toggle');
    let optionBox = document.querySelector('.dashboard-sidebar');
    let options = document.querySelectorAll('.dashboard-sidebar .dashboard-menu ul li a');
    $(toggleButton).on("click",function(){
      if($(optionBox).hasClass("slide-in"))
      {
        $(optionBox).removeClass("slide-in");
        toggleButton.innerHTML = ` <i class="fa fa-bars" aria-hidden="true" style="font-size:1.5rem"></i>`;
      }
      else{
        $(optionBox).addClass("slide-in");
        toggleButton.innerHTML = ` <i class="fa fa-times" aria-hidden="true" style="font-size:1.5rem"></i>`;
      }   

    });
    $(options).on("click",function(){
         $(optionBox).toggleClass("slide-in");
         toggleButton.innerHTML = ` <i class="fa fa-bars" aria-hidden="true" style="font-size:1.5rem"></i>`;
    });

    // document.querySelector('body').addEventListener("click",()=>{
    //   var panel = document.querySelector('.dropdown-content');
    //   panel['style'].display = "none";
    // });
    
  }

  logout(){
    this.auth.logout();
  }

}
