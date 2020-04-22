import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-category',
  templateUrl: './video-category.component.html',
  styleUrls: ['./video-category.component.scss']
})
export class VideoCategoryComponent implements OnInit {


  public featuredvideos;
  public latestvideos;
  public likesvideos;
  public category;
  constructor(public commonservice:CommonService, public route:ActivatedRoute) { }

ngOnInit() {
  this.route.queryParams.subscribe(result=>{
    //console.log(result);
    this.category=result.category

    this.commonservice.getCategoryVideoByViews(result.fetchcategory)
    .subscribe(result=>{
      this.featuredvideos=result.result.slice(0,6)
      for(let i=0; i<this.featuredvideos.length; i++)
      {
        let image=this.getId(this.featuredvideos[i].video_link);
        this.featuredvideos[i].image=`https://img.youtube.com/vi/${image}/0.jpg`;
      }
      //console.log(this.featuredvideos,'hittt')
    })

this.commonservice.getVideoByCategory(result.fetchcategory)
    .subscribe(result=>{
      this.latestvideos=result.result.slice(0,4)
      for(let i=0; i<this.latestvideos.length; i++)
      {
        let image=this.getId(this.latestvideos[i].video_link);
        this.latestvideos[i].image=`https://img.youtube.com/vi/${image}/0.jpg`;
      }
      //console.log(this.latestvideos,'hittt')
    })

    this.commonservice.getCategoryVideoByLikes(result.fetchcategory)
    .subscribe(result=>{
      this.likesvideos=result.result[0];
        let image=this.getId(this.likesvideos.video_link);
        this.likesvideos.image=`https://img.youtube.com/vi/${image}/0.jpg`;

      //console.log(this.likesvideos,'hittt')
    })
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
