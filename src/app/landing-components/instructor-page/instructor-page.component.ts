import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor-page',
  templateUrl: './instructor-page.component.html',
  styleUrls: ['./instructor-page.component.scss']
})
export class InstructorPageComponent implements OnInit {
  toRender = 'signup';
  
  constructor() { }

  ngOnInit() {
  }

}
