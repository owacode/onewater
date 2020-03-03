import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthorAuthService } from "./author-auth.service";

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
    this.http
      .post<{ status: string; msg: string; result: any }>(
        "https://onewateracademy-blogapi.herokuapp.com/unapproved-blog",
        data
      )
      .subscribe(result => {
        console.log(result);
      });
  }

  addToSavedBlog(value) {
    const data = new FormData();
    data.append("title", value.title);
    data.append("authorid", this.blogauth.authorapprovedid);
    data.append("image", value.image);
    data.append("desc", value.data);
    return this.http
      .post<{ status: string; msg: string; result: any }>(
        "https://onewater-blogapi.herokuapp.com/save-blog",
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
        "https://onewater-blogapi.herokuapp.com/update-saved-blog",
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
        "https://onewater-blogapi.herokuapp.com/updateimage-saved-blog",
        data
      );

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

  getSavedBlog(id) {
    return this.http
      .get<{ status: string; msg: string; result: any }>(
        "https://onewater-blogapi.herokuapp.com/savedblogs/"+id
      );

  }

  getSingleSavedBlog(id) {
    return this.http
    .get<{ status: string; msg: string; result: any }>(
      "https://onewater-blogapi.herokuapp.com/singlesavedblog/"+id
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

  deleteApproveBlog(mainid,approveid) {
    const id = {
      mainid : mainid,
      approveid:approveid
    }
    return this.http.post<{ status: string; msg: string; result: any }>(
      "http://localhost:3000/deleteapproveblog",id
    );
  }

  deleteUnApproveBlog(mainid,unapproveid) {
    const id = {
      mainid : mainid,
      unapproveid:unapproveid
    }
    return this.http.post<{ status: string; msg: string; result: any }>(
      "http://localhost:3000/deleteunapproveblog",id
    );
  }
}
