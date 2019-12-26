import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  showSubCat=false;
  currentCategory;

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

  category;
  subcategory;
  fetchcategory;
  singleblog;
  blogs;
  author;
  sname;
  tempcate;


  constructor(public route:ActivatedRoute, public http:HttpClient) { }

  ngOnInit() {



    this.route.queryParams.subscribe(result=>{
      console.log(result);
      this.category=result.category;
      this.tempcate=result.category;
      this.subcategory=result.subcategory;
      this.sname=result.sname;
      console.log('dwhdvwdw',this.category,this.subcategory,this.sname);

      for(let i=0;i<this.categories.length;i++){
        if(this.categories[i].name == this.category){
          this.currentCategory = this.categories[i].subcat;
        }
      }

      // if( this.category=='Water' && this.subcategory == 'Distribution System') this.fetchcategory='distribution';
      // if( this.category=='Water' && this.subcategory == 'Water Conservation') this.fetchcategory='conservation'
      // if( this.category=='Water' && this.subcategory == 'Drinking Water Quality') this.fetchcategory='drinking'
      // if( this.category=='Water' && this.subcategory == 'Water Treatment & Operations') this.fetchcategory='watertreatment'
      // if( this.category=='Water' && this.subcategory == 'Desalination') this.fetchcategory='desalination';

      // if( this.category=='Wastewater' && this.subcategory == 'Biosolids') this.fetchcategory='biosolids'
      // if( this.category=='Wastewater' && this.subcategory == 'Collection Systems') this.fetchcategory='collection'
      // if( this.category=='Wastewater' && this.subcategory == 'Water Reuse and Resource Recovery') this.fetchcategory='reuse'
      // if( this.category=='Wastewater' && this.subcategory == 'Odor and corrosion management') this.fetchcategory='odor'
      // if( this.category=='Wastewater' && this.subcategory == 'Wastewater treatment & Operations') this.fetchcategory='wastewatertreatment';

      // if( this.category=='Stormwater' && this.subcategory == 'Watershed') this.fetchcategory='watershed'
      // if( this.category=='Stormwater' && this.subcategory == 'Hydrology') this.fetchcategory='hydrology';

      // if( this.category=='Innovation & Research' && this.subcategory == 'Water Science & Research') this.fetchcategory='waterscience'
      // if( this.category=='Innovation & Research' && this.subcategory == 'Students') this.fetchcategory='students'
      // if( this.category=='Innovation & Research' && this.subcategory == 'Young Professionals') this.fetchcategory='youngpros'

      // if( this.category=='Sustainable Development' && this.subcategory == 'Climate Change') this.fetchcategory='climate'
      // if( this.category=='Sustainable Development' && this.subcategory == 'Resiliency') this.fetchcategory='resiliency'
      // if( this.category=='Sustainable Development' && this.subcategory == 'Energy') this.fetchcategory='energy'
      // if( this.category=='Sustainable Development' && this.subcategory == 'Regional Activities/ Cast Studies') this.fetchcategory='reg';

      // if( this.category=='Management & Finance' && this.subcategory == 'Workforce Development') this.fetchcategory='workforce'
      // if( this.category=='Management & Finance' && this.subcategory == 'Asset management') this.fetchcategory='asset'
      // if( this.category=='Management & Finance' && this.subcategory == 'Utility management') this.fetchcategory='util'
      // if( this.category=='Management & Finance' && this.subcategory == 'Financing') this.fetchcategory='finance'
      // if( this.category=='Management & Finance' && this.subcategory == 'Construction management') this.fetchcategory='cons'
      // if( this.category=='Management & Finance' && this.subcategory == 'Leadership') this.fetchcategory='leader';

      // if( this.category=='Legislative & Regulatory' && this.subcategory == 'Government Affairs') this.fetchcategory='govt'
      // if( this.category=='Legislative & Regulatory' && this.subcategory == 'Safety and Security') this.fetchcategory='safety'


console.log(this.fetchcategory,'effe');
      this.http.get<{status: any, msg: any, result:any}>('https://onewater-blog-api.herokuapp.com/category/'+this.sname)
      .subscribe(result=>{
        console.log(result);
        this.blogs=result.result;
        this.singleblog=this.blogs[0];
        console.log(this.singleblog.author_id);
        this.getauthor(this.singleblog.author_id);
      })
    })



  }

  getauthor(id){
    this.http.get<{status:string, msg:string, result:any}>('https://onewater-blog-api.herokuapp.com/approvedauthor/'+id)
    .subscribe(result=>{
      console.log(result, 'author');
      this.author=result.result[0]
    })
  }

}
