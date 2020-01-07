import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { AuthService } from '../../auth.service';
declare var $: any;

@Component({
  selector: "app-blog-post",
  templateUrl: "./blog-post.component.html",
  styleUrls: ["./blog-post.component.scss"]
})
export class BlogPostComponent implements OnInit {
  blog;
  author;
  authorblogs;
  url;
  liked;
  blogid;

  carouselOptions = {
    margin: 10,
    nav: true,
    dots: false,

    stagePadding: 30,
    navText: [
      '<img src="assets/img/icons/prev.svg" style="width:30px;">',
      '<img src="assets/img/icons/next.svg" style="width:30px;">'
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 2
      }
    }
  };

  constructor(public router: ActivatedRoute, public http: HttpClient, public auth:AuthService) {}

  ngOnInit() {
    $(function() {
      $(".blog-options .like-btn a").click(function() {
        $(".like-btn a, span").addClass("press", 500);
      });
    });


    this.router.params.subscribe(result => {
      this.blogid=result.id;
      console.log(result);
      this.url = `https://onewater.herokuapp.com/blog/${result.id}`;
      this.http
        .get<{ status: string; msg: string; result: any }>(
          "https://onewater-blog-api.herokuapp.com/singleappblog/" + result.id
        )
        .subscribe(result => {
          console.log(result,'########## blog single');
          this.blog = result.result[0];
          this.getauthor(this.blog.author_id);
          this.getauthorblogs(this.blog.author_id);
          this.isLiked({userid:this.auth.user_id, blogid:this.blogid});
        });
    });
  }

  getauthor(id) {
    this.http
      .get<{ status: string; msg: string; result: any }>(
        "https://onewater-blog-api.herokuapp.com/approvedauthor/" + id
      )
      .subscribe(result => {
        console.log(result, "author");
        this.author = result.result[0];
      });
  }

  getauthorblogs(id) {
    this.http
      .get<{ status: string; msg: string; result: any }>(
        "https://onewater-blog-api.herokuapp.com/authorapprovedblogs/" + id
      )
      .subscribe(result => {
        console.log(result, "mohit ");
        this.authorblogs = result.result.reverse();
        this.authorblogs = this.authorblogs.slice(0, 5);
      });
  }

  likeblog() {
    this.liked = true;
    const data={
      blogid:this.blogid,
      userid:this.auth.user_id
    }
    this.http.post('https://onewater-blog-api.herokuapp.com/like',data)
    .subscribe(result=>{
      console.log(result);
    })
  }

  isLiked(data){
    console.log(data,"LIKED BLOG #!!!!!!!!!!!!!!!!")
    console.log(`https://onewater-auth.herokuapp.com/likedbyuser?userid=${data.userid}&blogid=${data.blogid}`)
    this.http.get<{status:string,result:string}>(`https://onewater-auth.herokuapp.com/likedbyuser?userid=${data.userid}&blogid=${data.blogid}`)
    .subscribe(result=>{
      console.log(result);
      if(result.result=='1') {
        this.liked=true;
      }else{
        this.liked=false;
      }
    })
  }
}
