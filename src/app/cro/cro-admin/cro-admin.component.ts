import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { CROAuthService } from '../services/cro-auth.service';

@Component({
  selector: 'app-cro-admin',
  templateUrl: './cro-admin.component.html',
  styleUrls: ['./cro-admin.component.scss']
})
export class CroAdminComponent implements OnInit {

  toggleDropdown(element){
    var panel = document.getElementById(element);
    if (panel.style.display === "none") {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }
}

  constructor(public auth: CROAuthService) { }

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
