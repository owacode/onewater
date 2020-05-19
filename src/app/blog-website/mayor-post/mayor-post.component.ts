import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-mayor-post',
  templateUrl: './mayor-post.component.html',
  styleUrls: ['./mayor-post.component.scss']
})
export class MayorPostComponent implements OnInit {
mayor;
blog;
url;
liked;
blogid;
mayorblogs;
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

  constructor(public http: HttpClient, public route: ActivatedRoute, public auth:AuthService) { }

  ngOnInit() {
    this.route.params.subscribe(result=> {
      this.blogid = result.id;
      this.url = `https://onewater.herokuapp.com/blog/${result.id}`;
      this.http.get<{ status: string; msg: string; result: any }>(
        "https://onewater-mayor.herokuapp.com/singleappblog/"+result.id
      ).subscribe(result=>{
        this.blog = result.result;
        this.getmayor(result.result.mayor_id);
        this.getmayorblogs(result.result.mayor_id);
      })
    })
  }

  getmayor(id) {
    this.http
      .get<{ status: string; msg: string; result: any }>(
        "https://onewater-mayor.herokuapp.com/approvedmayor/" + id
      )
      .subscribe(result => {
        //console.log(result, "author");
        this.mayor = result.result[0];
      });
  }

  getmayorblogs(id) {
    this.http
      .get<{ status: string; msg: string; result: any }>(
        "https://onewater-mayor.herokuapp.com/approvedblogsbymayor/" + id
      )
      .subscribe(result => {
        //console.log(result, "author blogs ");
        this.mayorblogs = result.result.reverse();
        this.mayorblogs = this.mayorblogs.slice(0, 5);
      });
  }


  likeblog() {
    this.liked = true;
    const data={
      blogid:this.blogid,
      userid:this.auth.user_id
    }
    this.http.post('https://onewater-mayor.herokuapp.com/like',data)
    .subscribe(result=>{
      //console.log(result);
    })
  }

  isLiked(data){
    //console.log(data,"LIKED BLOG #!!!!!!!!!!!!!!!!")
    //console.log(`https://onewater-auth.herokuapp.com /likedbyuser?userid=${data.userid}&blogid=${data.blogid}`)
    this.http.get<{status:string,result:string}>(`https://onewater-auth.herokuapp.com /likedbyuser?userid=${data.userid}&blogid=${data.blogid}`)
    .subscribe(result=>{
      //console.log(result);
      if(result.result=='1') {
        this.liked=true;
      }else{
        this.liked=false;
      }
    })
  }

}
