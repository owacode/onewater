import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InstructorService } from '../instructor.service';
import { Route, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about-content',
  templateUrl: './about-content.component.html',
  styleUrls: ['./about-content.component.scss']
})
export class AboutContentComponent implements OnInit {

  constructor(public http:HttpClient, public instructorservice: InstructorService, public router:ActivatedRoute) { }
  course;
  courseid;
  ngOnInit() {

    this.router.params.subscribe(result => {
      //console.log(result);
      this.courseid = result.id;
    })
    //console.log(this.courseid,'course id');
    this.http.get<{status:any, msg:any, result:any}>('https://onewater-instructor-api.herokuapp.com/singlecourse/'+this.courseid)
    .subscribe(result=> {
      //console.log(result);
      this.course = result.result[0];
    })
  }

}
