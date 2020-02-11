import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InstructorService } from '../instructor.service';

@Component({
  selector: 'app-submitted-content',
  templateUrl: './submitted-content.component.html',
  styleUrls: ['./submitted-content.component.scss']
})
export class SubmittedContentComponent implements OnInit {

  constructor(public http:HttpClient, public instructorservice: InstructorService) { }
  courses;

  ngOnInit() {
    this.http.get<{status:any, msg:any, result:any}>('https://onewater-instructor-api.herokuapp.com/getinstructorcourses/'+ this.instructorservice.userid)
    .subscribe(result=> {
      console.log(result);
      this.courses = result.result
    })
  }

}
