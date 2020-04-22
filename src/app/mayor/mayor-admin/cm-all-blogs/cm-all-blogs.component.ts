import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { CommonService } from '../../services/common.service';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';

@Component({
  selector: 'app-cm-all-blogs',
  templateUrl: './cm-all-blogs.component.html',
  styleUrls: ['./cm-all-blogs.component.scss']
})
export class CmAllBlogsComponent implements OnInit {
  allblogs;
  search="";
  blogs;
  blogmainid;
  id;
  constructor(public common: CommonService, public modal: ModalFunctions) { }

  ngOnInit() {
    Feather.replace();
    this.common.getAllBlogs()
    .subscribe(result=>{
      //console.log(result);
      this.allblogs=result.result;
      this.blogs=result.result;
    })
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
    //console.log(this.blogmainid,this.id);
    this.modal.closeModal('#deleteApproved');
    this.common.deleteApproveBlog(this.blogmainid,this.id)
    .subscribe(result=> {
      //console.log('approve blog deleted successfully',result);
      this.modal.openModal("#blogDeleted");
    })
  }

  deleteUnApproveBlog() {
    //console.log(this.blogmainid,this.id);
    this.modal.closeModal('#deleteUnapproved');
    this.common.deleteUnApproveBlog(this.blogmainid,this.id)
    .subscribe(result=> {
      //console.log('unapprove blog deleted successfully',result);
      this.modal.openModal("#blogDeleted");
    })
  }

}
