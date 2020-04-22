import { Component, OnInit } from "@angular/core";
import * as Feather from "feather-icons";
import { CommonService } from "../../services/common.service";
@Component({
  selector: "app-cm-pending-blogs",
  templateUrl: "./cm-pending-blogs.component.html",
  styleUrls: ["./cm-pending-blogs.component.scss"]
})
export class CmPendingBlogsComponent implements OnInit {
  pendingblogs;
  search = "";
  blogs;
  constructor(public common: CommonService) {}

  ngOnInit() {
    Feather.replace();
    this.common.getPendingBlogs().subscribe(result => {
      //console.log(result);
      this.pendingblogs = result.result;
      this.blogs = result.result;
    });
  }
}
