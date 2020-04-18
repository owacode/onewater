import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Router} from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class CommonService {
  constructor(public http:HttpClient, public route: Router){}

  postVideo(data){
    return this.http.post<{status:any,msg:any,result:any}>("https://onewater-video-api.herokuapp.com/post-authorvideo",data);
  }

  getLatestvideos(){
    return this.http.get<{status:any,msg:any,result:any}>("https://onewater-video-api.herokuapp.com/videos");
  }

  getVideoByLikes(){
    return this.http.get<{status:any,msg:any,result:any}>("https://onewater-video-api.herokuapp.com/videobylikes");
  }

  getVideoByViews(){
    return this.http.get<{status:any,msg:any,result:any}>("https://onewater-video-api.herokuapp.com/videobyviews");
  }


  getVideoByCategory(category){
    return this.http.get<{status:any,msg:any,result:any}>("https://onewater-video-api.herokuapp.com/categoryvideos/"+category);
  }

  getHomeVideoByCategory(category){
    return this.http.get<{status:any,msg:any,result:any}>("https://onewater-video-api.herokuapp.com/homecategoryvideos/"+category);
  }

  getCategoryVideoByLikes(category){
    return this.http.get<{status:any,msg:any,result:any}>("https://onewater-video-api.herokuapp.com/categoryvideoslikes/"+category);
  }

  getCategoryVideoByViews(category){
    return this.http.get<{status:any,msg:any,result:any}>("https://onewater-video-api.herokuapp.com/categoryvideosviews/"+category);
  }

  getLikes(videoid){
    return this.http.get<{items:any}>(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoid}&key=AIzaSyDAmRDLp2OJIZ8EqXblfX0glUZyEN6iG_U`);
  }

  getsinglevideos(id){
    return this.http.get<{status:any,msg:any,result:any}>("https://onewater-video-api.herokuapp.com/video/"+id);
  }

  updatelikes(values){
    this.http.patch('https://onewater-video-api.herokuapp.com/likesandviews',values)
    .subscribe(result=>{
      console.log(result);
    })
}

}
