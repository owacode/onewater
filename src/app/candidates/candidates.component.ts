import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import Feather from 'feather-icons';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

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
