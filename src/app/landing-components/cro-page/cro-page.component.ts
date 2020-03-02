import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cro-page',
  templateUrl: './cro-page.component.html',
  styleUrls: ['./cro-page.component.scss']
})
export class CroPageComponent implements OnInit {

    //owl carousel setting for top authors
    carouselOptionsAuthors = {
      margin: 25,
      nav: true,
      dots: false,
      stagePadding: 50,
  
      navText: ['<img src="assets/img/icons/prev.svg" style="width:30px;">', '<img src="assets/img/icons/next.svg" style="width:30px;">'],
      responsiveClass: true,
      responsive: {
  
        0: {
          items: 1,
          nav: true,
          stagePadding: 10,
        },
        420: {
          items: 2,
          nav: true
        },
        800: {
          items: 3,
          nav: true
        },
        991: {
          items: 3,
          nav: true
        },
        1200: {
          items: 4,
          nav: true
        }
      }
    }

    carouselOptionsTestimonials= {
      margin: 25,
      nav: true,
      dots: false,
      stagePadding: 0,
      items:1,
      navText: ['<img src="assets/img/icons/prev.svg" style="width:30px;">', '<img src="assets/img/icons/next.svg" style="width:30px;">']
    }

  constructor() { }

  ngOnInit() {
  }

}
