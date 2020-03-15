import { Component, OnInit } from "@angular/core";
import * as Feather from "feather-icons";
import { CommonService } from "../../services/common.service";

@Component({
  selector: "app-cro-dashboard",
  templateUrl: "./cro-dashboard.component.html",
  styleUrls: ["./cro-dashboard.component.scss"]
})
export class CroDashboardComponent implements OnInit {
  recentblogs;
  totalblogs;
  approvedblogs;
  constructor(public common: CommonService) {}

  ngOnInit() {
    Feather.replace();

    this.common.getAllBlogs().subscribe(result => {
      this.totalblogs = result.result.length;
      this.recentblogs = result.result.slice(-5).reverse();
    });

    this.common.getApprovedBlogs().subscribe(result => {
      this.approvedblogs = result.result.length;
    });
  }
}
