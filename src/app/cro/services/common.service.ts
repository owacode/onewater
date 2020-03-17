import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CROAuthService } from "./cro-auth.service";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(
    public http: HttpClient,
    public route: Router,
    public croauth: CROAuthService
  ) {}
  addBlog(value) {
    console.log("service hit");
    const data = new FormData();
    let count = value.data.split(" ").length;
    let min = Math.ceil(count / 250);
    console.log(min.toString(), "fef");
    console.log(count, "iihiji");
    data.append("title", value.title);
    data.append("croid", this.croauth.croapprovedid);
    data.append("croname", this.croauth.croname);
    data.append("croimage", localStorage.getItem("croimage"));
    data.append("image", value.image);
    data.append("desc", value.data);
    data.append("readtime", min.toString());
    this.http
      .post<{ status: string; msg: string; result: any }>(
        "https://onewater-cro.herokuapp.com/unapproved-blog",
        data
      )
      .subscribe(result => {
        console.log(result);
      });
  }

  addSavedBlogWithImage(value) {
    const data = new FormData();
    let count = value.data.split(" ").length;
    let min = Math.ceil(count / 250);
    console.log(min.toString(), "fef");
    console.log(count, "iihiji");
    data.append("savedid", value.id);
    data.append("title", value.title);
    data.append("croid", this.croauth.croapprovedid);
    data.append("croname", this.croauth.croname);
    data.append("croimage", localStorage.getItem("croimage"));
    data.append("image", value.image);
    data.append("desc", value.data);
    data.append("readtime", min.toString());
    this.http
      .post<{ status: string; msg: string; result: any }>(
        "https://onewater-cro.herokuapp.com/saved-unapproved-blog-with-image",
        data
      )
      .subscribe(result => {
        console.log(result);
        //alert(result.msg);
      });
  }

  addSavedBlog(value) {
    let count = value.data.split(" ").length;
    let min = Math.ceil(count / 250);
    console.log(min.toString(), "fef");
    console.log(count, "iihiji");

    const saveblog = {
      savedid: value.id,
      title: value.title,
      desc: value.data,
      readtime: min.toString(),
      image: value.image,
      croid: this.croauth.croapprovedid,
      croname: this.croauth.croname,
      croimage: localStorage.getItem("croimage")
    };
    this.http
      .post<{ status: string; msg: string; result: any }>(
        "https://onewater-cro.herokuapp.com/saved-unapproved-blog",
        saveblog
      )
      .subscribe(result => {
        console.log(result);
        //alert(result.msg);
      });
  }

  addToSavedBlog(value) {
    const data = new FormData();
    data.append("title", value.title);
    data.append("croid", this.croauth.croapprovedid);
    data.append("image", value.image);
    data.append("desc", value.data);
    return this.http.post<{ status: string; msg: string; result: any }>(
      "https://onewater-cro.herokuapp.com/save-blog",
      data
    );
  }

  updateToSavedBlog(value) {
    const saveblog = {
      id: value.id,
      title: value.title,
      desc: value.data
    };
    return this.http.patch<{ status: string; msg: string; result: any }>(
      "https://onewater-cro.herokuapp.com/update-saved-blog",
      saveblog
    );
  }

  updateToSavedBlogWithImage(value) {
    const data = new FormData();
    data.append("id", value.id);
    data.append("title", value.title);
    data.append("desc", value.data);
    data.append("image", value.image);
    return this.http.patch<{ status: string; msg: string; result: any }>(
      "https://onewater-cro.herokuapp.com/updateimage-saved-blog",
      data
    );
  }

  getAllBlogs() {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewater-cro.herokuapp.com/croallblogs/" +
        this.croauth.croapprovedid
    );
  }

  getSavedBlog() {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewater-cro.herokuapp.com/crosavedblogs/" +
        this.croauth.croapprovedid
    );
  }

  getSingleSavedBlog(id) {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewater-cro.herokuapp.com/singlecrosavedblog/" + id
    );
  }

  getPendingBlogs() {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewater-cro.herokuapp.com/notapprovedblogsbycro/" +
        this.croauth.croapprovedid
    );
  }

  getApprovedBlogs() {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewater-cro.herokuapp.com/approvedcroblogs/" +
        this.croauth.croapprovedid
    );
  }

  getSingleApprovedBlogs(id) {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewater-cro.herokuapp.com/singleappblog/" + id
    );
  }

  getUser() {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewater-cro.herokuapp.com/single-cro/" +
        this.croauth.croapprovedid
    );
  }

  getSingleAllBlog(id) {
    console.log(id, "jjj");
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewater-cro.herokuapp.com/allblogs/" + id
    );
  }

  deleteApproveBlog(mainid, approveid) {
    const id = {
      mainid: mainid,
      approveid: approveid
    };
    return this.http.post<{ status: string; msg: string; result: any }>(
      "https://onewater-cro.herokuapp.com/deleteapproveblog",
      id
    );
  }

  deleteUnApproveBlog(mainid, unapproveid) {
    const id = {
      mainid: mainid,
      unapproveid: unapproveid
    };
    return this.http.post<{ status: string; msg: string; result: any }>(
      "https://onewater-cro.herokuapp.com/deleteunapproveblog",
      id
    );
  }
}
