import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AuthorAuthService } from "./author-auth.service";
import * as $ from "jquery";
import { XSRF_COOKIE_NAME } from "@angular/common/http/src/xsrf";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(
    public http: HttpClient,
    public route: Router,
    public blogauth: AuthorAuthService
  ) {}

  addBlog(value) {
    const data = new FormData();
    let count = value.data.split(" ").length;
    let min = Math.ceil(count / 250);
    console.log(min.toString(), "fef");
    console.log(count, "iihiji");
    data.append("title", value.title);
    data.append("authorid", this.blogauth.authorapprovedid);
    data.append("authorname", this.blogauth.authorname);
    data.append("authorimage", localStorage.getItem("image"));
    data.append("image", value.image);
    data.append("desc", value.data);
    data.append("readtime", min.toString());
    data.append("category", "Technology");
    data.append("category", "Health");
    this.http
      .post<{ status: string; msg: string; result: any }>(
        "https://onewateracademy-blogapi.herokuapp.com/unapproved-blog",
        data
      )
      .subscribe(result => {
        console.log(result);
      });
  }

  addVideo(values) {
    this.http
      .post("https://onewateracademy-blogapi.herokuapp.com/post-video", values)
      .subscribe(result => {
        console.log(result);
        //alert("Video Posted Successfully");
      });
  }

  getAllVideos() {
    const data = {
      email: localStorage.getItem("authoremail")
    };
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewateracademy-blogapi.herokuapp.com/singlevideo/" +
        localStorage.getItem("authoremail")
    );
  }

  getAllBlogs() {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewateracademy-blogapi.herokuapp.com/authorallblogs/" +
        this.blogauth.authorapprovedid
    );
  }

  getPendingBlogs() {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewateracademy-blogapi.herokuapp.com/authorunapprovedblogs/" +
        this.blogauth.authorapprovedid
    );
  }

  getApprovedBlogs() {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewateracademy-blogapi.herokuapp.com/authorapprovedblogs/" +
        this.blogauth.authorapprovedid
    );
  }

  getSingleApprovedBlogs(id) {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewateracademy-blogapi.herokuapp.com/singleappblog/" + id
    );
  }

  getUser() {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewateracademy-blogapi.herokuapp.com/single-author/" +
        this.blogauth.authorapprovedid
    );
  }

  getSingleAllBlog(id) {
    console.log(id, "jjj");
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewateracademy-blogapi.herokuapp.com/allblogs/" + id
    );
  }
}
