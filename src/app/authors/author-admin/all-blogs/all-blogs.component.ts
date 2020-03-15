import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { CommonService } from '../../services/common.service';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.scss']
})
export class AllBlogsComponent implements OnInit {
  allblogs;
  search="";
  blogs;
  blogmainid;
 id;
  constructor(public common:CommonService, public modal: ModalFunctions) { }

  ngOnInit() {
    Feather.replace();
    this.common.getAllBlogs()
    .subscribe(result=>{
      console.log(result);
      this.allblogs=result.result;
      this.blogs=result.result;
    })
  }

  onKey(event: any) {
    if(this.search.toString().trim()!='')
    {
          this.allblogs=this.blogs.filter(i => i.title.toLowerCase().indexOf(this.search.toString().trim()) != -1)
    }
   else{
     this.allblogs=this.blogs;
   }
  }

  changeId(mainid, id, modalType) {
    this.id = id;
    this.blogmainid = mainid;
    if(modalType == 'approved')
    {
      this.modal.openModal('#deleteApproved');
    }
    else{
      this.modal.openModal('#deleteUnapproved');
    }
  }

  deleteApproveBlog() {
    console.log('app hit')
    console.log(this.blogmainid,this.id);
    this.modal.closeModal('#deleteApproved');
    this.common.deleteApproveBlog(this.blogmainid,this.id)
    .subscribe(result=> {
      console.log('approve blog deleted successfully',result);
      this.modal.openModal("#blogDeleted");
    })
  }

  deleteUnApproveBlog() {
    console.log('unapp hit')
    console.log(this.blogmainid,this.id);
    this.modal.closeModal('#deleteUnapproved');
    this.common.deleteUnApproveBlog(this.blogmainid,this.id)
    .subscribe(result=> {
      console.log('unapprove blog deleted successfully',result);
      this.modal.openModal("#blogDeleted");
    })
  }

}
