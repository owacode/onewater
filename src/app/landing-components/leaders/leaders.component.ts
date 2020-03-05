import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.scss']
})
export class LeadersComponent implements OnInit {

  carouselBlogs = {
    margin: 25,
    nav: true,
    dots: false,
    stagePadding: 30,
    navText: ['<img src="assets/img/icons/prev.svg" style="width:30px;">', '<img src="assets/img/icons/next.svg" style="width:30px;">'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        stagePadding: 50
      },
     1000: {
        items: 3,
      }
    }
  }
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
