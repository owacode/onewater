import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-admin-blogpost',
  templateUrl: './admin-blogpost.component.html',
  styleUrls: ['./admin-blogpost.component.scss']
})
export class AdminBlogpostComponent implements OnInit {

  url;
  blog;
  liked;
  blogid;
  constructor(public route:ActivatedRoute, public http: HttpClient, public auth:AuthService) { }

  ngOnInit() {
    this.route.params.subscribe(result=> {
      //console.log(result);
      this.blogid=result.id;
      this.url = `http://www.onewateracademy.org/onewaterblog/blogpost/${result.id}`;
      this.http.get<{ status: string, msg: string, result: any }>('https://onewater-blogapi.herokuapp.com/homeblog/'+result.id)
      .subscribe(result => {
        //console.log(result, 'bannerrrr');
        // console.log({userid:this.auth.user_id, blogid:this.blogid})
        this.blog = result.result[0];
        this.isLiked({userid:this.auth.user_id, blogid:this.blogid});
        //console.log(this.blog);
      })
    })
  }

  likeblog() {
    this.liked = true;
    const data={
      blogid:this.blogid,
      userid:this.auth.user_id
    }
    console.log(data)
    this.http.post('http://18.223.24.178:8000/like-homeblog',data)
    .subscribe(result=>{
      // console.log(result);
    })
  }

  isLiked(data){
    // console.log(data,"LIKED BLOG #!!!!!!!!!!!!!!!!")
    console.log(`http://18.223.24.178:7000/likedbyuser?userid=${data.userid}&blogid=${data.blogid}`)
    this.http.get<{status:string,result:string}>(`http://18.223.24.178:7000/likedbyuser?userid=${data.userid}&blogid=${data.blogid}`)
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
