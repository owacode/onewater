import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-cro-profile',
  templateUrl: './cro-profile.component.html',
  styleUrls: ['./cro-profile.component.scss']
})
export class CroProfileComponent implements OnInit {
  cro;
  totalcroblogs;
  croblogs;
  constructor(public http: HttpClient, public route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(result=> {
      this.getcroblogs(result.id);
      this.http
      .get<{ status: string; msg: string; result: any }>(
        "https://onewater-cro.herokuapp.com/approvedcro/" + result.id
      )
      .subscribe(result => {
        //console.log(result, "cro");
        this.cro = result.result[0];
        this.totalcroblogs = result.result[0].approved_blogs_added.length;
        //console.log(result.result[0].approved_blogs_added,this.totalcroblogs)
      });
    })
  }

  getcroblogs(id) {
    this.http
      .get<{ status: string; msg: string; result: any }>(
        "https://onewater-cro.herokuapp.com/approvedcroblogs/" + id
      )
      .subscribe(result => {
        //console.log(result, "author blogs ");
        this.croblogs = result.result.reverse();
        this.croblogs = this.croblogs.slice(0, 5);
      });
  }

}
