import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-single-video',
  templateUrl: './single-video.component.html',
  styleUrls: ['./single-video.component.scss']
})
export class SingleVideoComponent implements OnInit {
  url;
  //owl carousel settings
 
  carouselOptions = {
    margin: 25,
    nav: true,
    dots:false,

    stagePadding: 50,
    navText: ['<img src="assets/img/icons/prev.svg" style="width:30px;">', '<img src="assets/img/icons/next.svg" style="width:30px;">'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 10,
      },
      600: {
        items: 2,

      },
      1200: {
        items: 3,


      },
      1500: {
        items: 3,

      }
    }
  }

  public video;
  public videoid;
  public likesvideos;
  safeSrc: SafeResourceUrl;
  constructor(public route: ActivatedRoute, public common:CommonService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
   

    this.route.params.subscribe(result=> {
      console.log(result);
      this.videoid=result.id;
      this.url=`https://onewater.herokuapp.com/blog/${result.id}`;
      this.common.getsinglevideos(result.id)

      .subscribe(result=> {
        console.log(result);
        this.video=result.result;
        const link=this.getId(this.video.video_link);
        this.video.video_link=`https://www.youtube.com/embed/${link}`;
        this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.video.video_link);
        console.log(this.video)
        this.getlikes(link);
      })
    })

    this.common.getVideoByLikes()
    .subscribe(result=>{
      this.likesvideos=result.result;
      for(let i=0; i<this.likesvideos.length; i++)
      {
        let image=this.getId(this.likesvideos[i].video_link);
        this.likesvideos[i].image=`https://img.youtube.com/vi/${image}/0.jpg`;
      }
      console.log(this.likesvideos,'hittt')
    })
  }

  getlikes(id){
    this.common.getLikes(id)
    .subscribe(result=>{
      console.log(result.items[0].statistics,'result displayed');
      const data={
        id:this.videoid,
        likeCount:result.items[0].statistics.likeCount,
        viewCount:result.items[0].statistics.viewCount,
      }
      this.common.updatelikes(data);
    })
  }

   getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}

}
