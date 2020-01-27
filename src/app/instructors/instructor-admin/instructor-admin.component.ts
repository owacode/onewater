import { Component, OnInit } from '@angular/core';
import { InstructorService } from './instructor.service';

@Component({
  selector: 'app-instructor-admin',
  templateUrl: './instructor-admin.component.html',
  styleUrls: ['./instructor-admin.component.scss']
})
export class InstructorAdminComponent implements OnInit {

  constructor(public instructorservice: InstructorService) { }

  ngOnInit() {
  }

  logout(){
    this.instructorservice.logout();
  }

}
