import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  toRender='signup';
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
        stagePadding: 0
      },
    600: {
        items: 2,
      },
      1100: {
        items: 3,
  
      },
      1500: {
        items: 3,
  
      }
    }
  }
 
  public featuredvideos;
  public latestvideos;
  public likesvideos;
  public water;
  public wastewater;
  public stormwater;
  public innovationresearch;
  public sustainabledevelopment;
  public managementsinance;
  public legistativeregulatory;
  singleliked;
  constructor(public commonservice:CommonService) { }

ngOnInit() {

 //owl carousel settings
  // this.commonservice.getVideoByViews()
  //       .subscribe(result=>{
  //         this.featuredvideos=result.result.slice(0,10)
  //         console.log(this.featuredvideos,'hittt')
  //       })

  this.commonservice.getHomeVideoByCategory('water')
    .subscribe(result=>{
      this.water=result.result.slice(0,10)
      console.log(this.water,'hittt water')
    })

    this.commonservice.getHomeVideoByCategory('wastewater')
    .subscribe(result=>{
      this.wastewater=result.result.slice(0,10)
      console.log(this.wastewater,'hittt wastewater')
    })

    this.commonservice.getHomeVideoByCategory('stormwater')
    .subscribe(result=>{
      this.stormwater=result.result.slice(0,10)
      console.log(this.featuredvideos,'hittt stormwater')
    })

    this.commonservice.getHomeVideoByCategory('research')
    .subscribe(result=>{
      this.innovationresearch=result.result.slice(0,10)
      console.log(this.featuredvideos,'hittt research')
    })

    this.commonservice.getHomeVideoByCategory('sustainable')
    .subscribe(result=>{
      this.sustainabledevelopment=result.result.slice(0,10)
      console.log(this.featuredvideos,'hittt sustainable')
    })


    this.commonservice.getHomeVideoByCategory('mgmt')
    .subscribe(result=>{
      this.managementsinance=result.result.slice(0,10)
      console.log(this.featuredvideos,'hittt mgmt')
    })

    this.commonservice.getHomeVideoByCategory('leg')
    .subscribe(result=>{
      this.legistativeregulatory=result.result.slice(0,10)
      console.log(this.featuredvideos,'hittt leg')
    })

  this.commonservice.getLatestvideos()
        .subscribe(result=>{
          this.latestvideos=result.result.slice(0,12)
          console.log(this.latestvideos,'hittt')
        })

        this.commonservice.getVideoByLikes()
        .subscribe(result=>{
          this.singleliked=result.result[0]
          this.likesvideos=result.result.slice(1,5);
          console.log(this.likesvideos,'hittt likedd')
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
