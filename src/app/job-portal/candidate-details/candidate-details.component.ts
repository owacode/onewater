import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss']
})
export class CandidateDetailsComponent implements OnInit {

  //owl carousel settings
  carouselOptions = {
    margin: 25,
    nav: true,
    dots:false,

    stagePadding: 50,
    navText: ['<img src="assets/img/icons/prev.svg" style="width:30px;">', '<img src="assets/img/icons/next.svg" style="width:30px;">'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 10,
      },
      600: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1500: {
        items: 3,

      }
    }
  }

  constructor() { }

  ngOnInit() {
    Feather.replace();
  }

}
