import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { MayorAuthService } from '../services/mayor-auth.service';

@Component({
  selector: 'app-mayor-admin',
  templateUrl: './mayor-admin.component.html',
  styleUrls: ['./mayor-admin.component.scss']
})

export class MayorAdminComponent implements OnInit {

  constructor(public auth: MayorAuthService) { }
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

  }

  logout(){
    this.auth.logout();
  }

}
