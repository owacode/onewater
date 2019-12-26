import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $: any;
declare var ScrollMagic : any;
declare var TimelineMax : any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  showSubCat = false;
  currentCategory = '';

  blogcards;
  featuredblog;


  categories = [
    {
      'img': 'assets/img/icons/water.svg',
      'name': 'Water',
      'subcat': [
        {
          'subname': 'Distribution System',
          'sname': 'distribution',
          'subimg': 'assets/img/icons/distribution.svg'
        },
        {
          'subname': 'Water Conservation',
          'sname': 'conservation',
          'subimg': 'assets/img/icons/conserve.svg'
        },
        {
          'subname': 'Drinking Water Quality',
          'sname': 'drinking',
          'subimg': 'assets/img/icons/drink.svg'
        },
        {
          'subname': 'Water Treatment & Opreations',
          'sname': 'watertreatment',
          'subimg': 'assets/img/icons/treatment.svg'
        },
        {
          'subname': 'Desalination',
          'sname': 'desalination',
          'subimg': 'assets/img/icons/desalination.svg'
        }
      ]
    },
    {
      'img': 'assets/img/icons/waste-water.svg',
      'name': 'Waste Water',
      'subcat': [
        {
          'subname': 'Biosolids',
          'sname': 'biosolids',
          'subimg': 'assets/img/icons/lab.svg'
        },
        {
          'subname': 'Collection Systems',
          'sname': 'collection',
          'subimg': 'assets/img/icons/water-tank.svg'
        },
        {
          'subname': 'Water Reuse and Resource Recovery',
          'sname': 'reuse',
          'subimg': 'assets/img/icons/reuse.svg'
        },
        {
          'subname': 'Odour and Corrosion Management',
          'sname': 'odor',
          'subimg': 'assets/img/icons/smell.svg'
        },
        {
          'subname': 'Wastewater Treatment & /Operations',
          'sname': 'wastewatertreatment',
          'subimg': 'assets/img/icons/sewage.svg'
        }

      ]
    },
    {
      'img': 'assets/img/icons/storm.svg',
      'name': 'Storm Water',
      'subcat': [
        {
          'subname': 'Watershed',
          'sname': 'watershed',
          'subimg': 'assets/img/icons/lake.svg'
        },
        {
          'subname': 'Hydrology',
          'sname': 'hydrology',
          'subimg': 'assets/img/icons/molecule.svg'
        }
      ]
    },
    {
      'img': 'assets/img/icons/research.svg',
      'name': 'Innovation & Research',
      'subcat': [
        {
          'subname': 'Water Science & Research',
          'sname': 'waterscience',
          'subimg': 'assets/img/icons/test.svg'
        },
        {
          'subname': 'Students',
          'sname': 'students',
          'subimg': 'assets/img/icons/graduate.svg'
        },
        {
          'subname': 'Young Professionals',
          'sname': 'youngpros',
          'subimg': 'assets/img/icons/scientist.svg'
        }

      ]
    },
    {
      'img': 'assets/img/icons/sustainable.svg',
      'name': 'Sustainable Development',
      'subcat': [
        {
          'subname': 'Climate Change',
          'sname': 'climate',
          'subimg': 'assets/img/icons/climate.svg'
        },
        {
          'subname': 'Resiliency',
          'sname': 'resiliency',
          'subimg': 'assets/img/icons/resilent.svg'
        },
        {
          'subname': 'Energy',
          'sname': 'energy',
          'subimg': 'assets/img/icons/energy.svg'
        },
        {
          'subname': 'Regional Actvities/ Case Studies',
          'sname': 'reg',
          'subimg': 'assets/img/icons/case.svg'
        }
      ]

    },
    {
      'img': 'assets/img/icons/finance.svg',
      'name': 'Management & Finance',
      'subcat': [
        {
          'subname': 'Workforce Management',
          'sname': 'workforce',
          'subimg': 'assets/img/icons/team.svg'
        },
        {
          'subname': 'Asset Management',
          'sname': 'asset',
          'subimg': 'assets/img/icons/management.svg'
        },
        {
          'subname': 'Utility Management',
          'sname': 'util',
          'subimg': 'assets/img/icons/settings.svg'
        },
        {
          'subname': 'Financing',
          'sname': 'finance',
          'subimg': 'assets/img/icons/profits.svg'
        }, {
          'subname': 'Construction Management',
          'sname': 'cons',
          'subimg': 'assets/img/icons/mechanic.svg'
        }, {
          'subname': 'Leadership',
          'sname': 'leader',
          'subimg': 'assets/img/icons/leadership.svg'
        }
      ]
    },
    {
      'img': 'assets/img/icons/regulatory.svg',
      'name': 'Legistative/ Regulatory',
      'subcat': [
        {
          'subname': 'Goverment Affairs',
          'sname': 'govt',
          'subimg': 'assets/img/icons/government.svg'
        },
        {
          'subname': 'Safety and Security',
          'sname': 'safety',
          'subimg': 'assets/img/icons/padlock.svg'
        }
      ]
    },
  ]

  SubCategories = [];
  showSubCategories(index) {
    this.showSubCat = true;
    this.currentCategory = this.categories[index].name;
    this.SubCategories = [];
    this.SubCategories = this.categories[index].subcat;
    console.log(this.SubCategories);
    document.querySelector(".categories-card")['style'].display = "none";
    document.querySelector(".subcategories-card")['style'].display = "block";
  }
  backToCategories() {
    document.querySelector(".categories-card")['style'].display = "block";
    document.querySelector(".subcategories-card")['style'].display = "none";
  }

  //owl carousel settings

  carouselOptions = {
    margin: 25,
    nav: true,
    dots: false,
    stagePadding: 30,
    navText: ['<img src="assets/img/icons/prev.svg" style="width:30px;">', '<img src="assets/img/icons/next.svg" style="width:30px;">'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
        stagePadding: 50
      },
      1200: {
        items: 3,
      },
      1500: {
        items: 3,
      }
    }
  }

  carouselOptionsAuthors = {
    margin: 25,
    nav: true,
    dots: false,
    stagePadding: 50,

    navText: ['<img src="assets/img/icons/prev.svg" style="width:30px;">', '<img src="assets/img/icons/next.svg" style="width:30px;">'],
    responsiveClass: true,
    responsive: {

      0: {
        items: 1,
        nav: true,
        stagePadding: 10,
      },
      420: {
        items: 2,
        nav: true
      },
      800: {
        items: 3,
        nav: true
      },
      991: {
        items: 3,
        nav: true
      },
      1200: {
        items: 4,
        nav: true
      }
    }
  }

  authors;
  bannerblogs;

  constructor(public http: HttpClient) { }

  ngOnInit() {  
  //   let el = document.getElementById('sidebar');
  //   let container = document.getElementById('wrapper');
  //   let extraHeight = $(window).height() * 0.8;
  //   let windowHeight = $(window).height();
  //   let stickyTop = $(container).offset().top + extraHeight + 260;
  //   let debounce_timer;
  //   let windowTop = $(window).scrollTop();
  //   console.log(windowTop,stickyTop);
  
  //   $(window).on("scroll", function () {
  //     if(debounce_timer) {
  //       window.clearTimeout(debounce_timer);
  //      }
  
  //    debounce_timer = window.setTimeout(function() {
  //       // run your actual function here
  //     let limit = $('.footer').offset().top + extraHeight - 530;
  //     if(windowTop < stickyTop) {
  //       $(el).removeClass('affix');
  //     }
  //     if (windowTop > stickyTop) {
  //       $(el).addClass('affix');
  //     }
  //     if (windowTop + windowHeight > limit) {
  //       $(el).removeClass('affix');
  //       $(el).addClass('abs');
  //     }
  //     else {
  //       $(el).removeClass('abs');
  //     }
  //       console.log('Fire');
  // }, 10)
  // });
  

    // var container =  document.getElementById("wrapper");
    // function getHeight(){
    //   var scrollHeight = $(container).height();
    //  // console.log(scrollHeight);
    //   return scrollHeight;
    // }
    // var controller = new ScrollMagic.Controller({
    // });
    // var scene1 = new ScrollMagic.Scene({
    //   triggerElement:'.wrapper',
    //   triggerHook:0.12,
      
    // })
    // .duration(getHeight)
    // //.setPin("#sidebar")
    // .setClassToggle('#sidebar', 'affix')
    // .addIndicators()
    // .refresh(getHeight())
    // .addTo(controller);


    this.http.get<{ status: string, msg: string, result: any }>('https://onewater-blog-api.herokuapp.com/approveblogs')
      .subscribe(result => {
        console.log(result);
        this.blogcards = result.result;
        this.featuredblog = result.result.reverse();
        this.featuredblog = this.featuredblog.slice(0, 6);
      })

    this.http.get<{ status: string, msg: string, result: any }>('https://onewater-blog-api.herokuapp.com/approvedauthor')
      .subscribe(result => {
        console.log(result);
        this.authors = result.result;

      })

    this.http.get<{ status: string, msg: string, result: any }>('https://onewater-blog-api.herokuapp.com/homeblog')
      .subscribe(result => {
        console.log(result, 'bannerrrr');
        this.bannerblogs = result.result;

      })
     
  }

}
