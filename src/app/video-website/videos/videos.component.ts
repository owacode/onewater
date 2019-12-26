import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { CommonService } from '../services/common.service';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

      public videos;
      constructor(public commonservice:CommonService) { }

  ngOnInit() {
    this.commonservice.getLatestvideos()
    .subscribe(result=>{
      this.videos=result.result;
      for(let i=0; i<this.videos.length; i++)
      {
        let image=this.getId(this.videos[i].video_link);
        this.videos[i].image=`https://img.youtube.com/vi/${image}/0.jpg`;
      }
      console.log(this.videos,'hittt')
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
