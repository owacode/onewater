import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { MayorAuthService } from "./mayor-auth.service";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(
    public mayorauth: MayorAuthService,
    public http: HttpClient,
    public route: Router
  ) {}

  addBlog(value) {
    console.log('service hit')
    const data = new FormData();
    let count = value.data.split(" ").length;
    let min = Math.ceil(count / 250);
    console.log(min.toString(), "fef");
    console.log(count, "iihiji");
    data.append("title", value.title);
    data.append("mayorid", this.mayorauth.mayorapprovedid);
    data.append("mayorname", this.mayorauth.mayorname);
    data.append("mayorimage", localStorage.getItem("mayorimage"));
    data.append("image", value.image);
    data.append("desc", value.data);
    data.append("readtime", min.toString());
    this.http
      .post<{ status: string; msg: string; result: any }>(
        "https://onewater-mayor.herokuapp.com/unapproved-blog",
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
    data.append("mayorid", this.mayorauth.mayorapprovedid);
    data.append("mayorname", this.mayorauth.mayorname);
    data.append("mayorimage", localStorage.getItem("mayorimage"));
    data.append("image", value.image);
    data.append("desc", value.data);
    data.append("readtime", min.toString());
    this.http
      .post<{ status: string; msg: string; result: any }>(
        "https://onewater-mayor.herokuapp.com/saved-unapproved-blog-with-image",
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
      mayorid: this.mayorauth.mayorapprovedid,
      mayorname: this.mayorauth.mayorname,
      mayorimage: localStorage.getItem("mayorimage"),
    }
    this.http
      .post<{ status: string; msg: string; result: any }>(
        "https://onewater-mayor.herokuapp.com/saved-unapproved-blog",
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
    data.append("mayorid", this.mayorauth.mayorapprovedid);
    data.append("image", value.image);
    data.append("desc", value.data);
    return this.http
      .post<{ status: string; msg: string; result: any }>(
        "https://onewater-mayor.herokuapp.com/save-blog",
        data
      );

  }

  updateToSavedBlog(value) {
    const saveblog = {
      id:value.id,
      title: value.title,
      desc: value.data
    }
    return this.http
      .patch<{ status: string; msg: string; result: any }>(
        "https://onewater-mayor.herokuapp.com/update-saved-blog",
        saveblog
      );

  }

  updateToSavedBlogWithImage(value) {
    const data = new FormData();
    data.append("id", value.id);
    data.append("title", value.title);
    data.append("desc", value.data);
    data.append("image", value.image);
    return this.http
      .patch<{ status: string; msg: string; result: any }>(
        "https://onewater-mayor.herokuapp.com/updateimage-saved-blog",
        data
      );

  }

  getAllBlogs() {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewater-mayor.herokuapp.com/allmayorblogs/" +
        this.mayorauth.mayorapprovedid
    );
  }

  getSavedBlog() {
    return this.http
      .get<{ status: string; msg: string; result: any }>(
        "https://onewater-mayor.herokuapp.com/mayorsavedblogs/"+this.mayorauth.mayorapprovedid
      );

  }

  getSingleSavedBlog(id) {
    return this.http
    .get<{ status: string; msg: string; result: any }>(
      "https://onewater-mayor.herokuapp.com/singlemayorsavedblog/"+id
    );
  }

  getPendingBlogs() {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewater-mayor.herokuapp.com/notapprovedblogsbymayor/" +
        this.mayorauth.mayorapprovedid
    );
  }

  getApprovedBlogs() {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewater-mayor.herokuapp.com/approvedblogsbymayor/" +
        this.mayorauth.mayorapprovedid
    );
  }

  getSingleApprovedBlogs(id) {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewater-mayor.herokuapp.com/singleappblog/" + id
    );
  }

  getUser() {
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewater-mayor.herokuapp.com/single-mayor/" +
        this.mayorauth.mayorapprovedid
    );
  }

  getSingleAllBlog(id) {
    console.log(id, "jjj");
    return this.http.get<{ status: string; msg: string; result: any }>(
      "https://onewater-mayor.herokuapp.com/allblogs/"+id
    );
  }

  deleteApproveBlog(mainid,approveid) {
    const id = {
      mainid : mainid,
      approveid:approveid
    }
    return this.http.post<{ status: string; msg: string; result: any }>(
      "https://onewater-mayor.herokuapp.com/deleteapproveblog",id
    );
  }

  deleteUnApproveBlog(mainid,unapproveid) {
    const id = {
      mainid : mainid,
      unapproveid:unapproveid
    }
    return this.http.post<{ status: string; msg: string; result: any }>(
      "https://onewater-mayor.herokuapp.com/deleteunapproveblog",id
    );
  }
}
