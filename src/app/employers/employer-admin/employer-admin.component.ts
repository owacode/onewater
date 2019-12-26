import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import * as $ from "jquery";
import { GetOperationService } from '../services/getOperation.service';
import { AuthJobService } from '../services/auth.service';

@Component({
  selector: 'app-employer-admin',
  templateUrl: './employer-admin.component.html',
  styleUrls: ['./employer-admin.component.scss']
})
export class EmployerAdminComponent implements OnInit {

  company;
  constructor(public getservice:GetOperationService, public auth:AuthJobService) { }

  ngOnInit() {
    this.auth.checkLocalStorage();
    this.getservice.getSingleCompany()
    .subscribe(result=>{
      console.log(result)
      this.company=result.result;
    })
    let filter = document.querySelector('.filter-btn a');
    let optionBox = document.querySelector('.dashboard-sidebar');
    let options = document.querySelectorAll('.dashboard-sidebar .dashboard-menu ul li a');
    $(filter).on("click",function(){
         $(optionBox).toggleClass("slide-in");
    });
    $(options).on("click",function(){
         $(optionBox).removeClass("slide-in");
         $(filter).innerHTML = '<i data-feather="arrow-left"></i> Back';
         console.log(filter.innerHTML);
    });

    Feather.replace();
  }

  logout(){
    this.auth.logout();
  }

}
