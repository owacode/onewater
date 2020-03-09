import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-mayor-profile',
  templateUrl: './mayor-profile.component.html',
  styleUrls: ['./mayor-profile.component.scss']
})
export class MayorProfileComponent implements OnInit {

  mayor;
  totalmayorblogs;
  mayorblogs;
  constructor(public http: HttpClient, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(result=> {
      this.getmayorblogs(result.id);
      this.http
      .get<{ status: string; msg: string; result: any }>(
        "https://onewater-mayor.herokuapp.com/approvedmayor/" + result.id
      )
      .subscribe(result => {
        console.log(result, "author");
        this.mayor = result.result[0];
        this.totalmayorblogs = result.result[0].approved_blogs_added.length;
        console.log(result.result[0].approved_blogs_added,this.totalmayorblogs)
      });
    })
  }

  getmayorblogs(id) {
    this.http
      .get<{ status: string; msg: string; result: any }>(
        "https://onewater-mayor.herokuapp.com/approvedblogsbymayor/" + id
      )
      .subscribe(result => {
        console.log(result, "author blogs ");
        this.mayorblogs = result.result.reverse();
        this.mayorblogs = this.mayorblogs.slice(0, 5);
      });
  }

}
