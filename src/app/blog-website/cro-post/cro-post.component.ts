import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cro-post',
  templateUrl: './cro-post.component.html',
  styleUrls: ['./cro-post.component.scss']
})
export class CroPostComponent implements OnInit {

  carouselOptions = {
    margin: 10,
    nav: true,
    dots: false,

    stagePadding: 30,
    navText: [
      '<img src="assets/img/icons/prev.svg" style="width:30px;">',
      '<img src="assets/img/icons/next.svg" style="width:30px;">'
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 2
      }
    }
  };
  
  
  constructor() { }

  ngOnInit() {
  }

}
