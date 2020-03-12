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
  constructor(public common: CommonService, public modal: ModalFunctions) { }

  ngOnInit() {
    Feather.replace();
    this.common.getAllBlogs()
    .subscribe(result=>{
      console.log(result);
      this.allblogs=result.result;
      this.blogs=result.result;
    })
  }

  deleteApproveBlog(mainid,approve_id) {
    console.log(mainid,approve_id);
    this.modal.closeModal('deleteApproved');
    this.common.deleteApproveBlog(mainid,approve_id)
    .subscribe(result=> {
      console.log('approve blog deleted successfully',result);
       this.modal.openModal("#blogDeleted");
    })
  }

  deleteUnApproveBlog(mainid,unapprove_id) {
    console.log(mainid,unapprove_id);
    this.modal.closeModal('deleteUnapproved');
    this.common.deleteUnApproveBlog(mainid,unapprove_id)
    .subscribe(result=> {
      console.log('unapprove blog deleted successfully',result);
       this.modal.openModal("#blogDeleted");
    })
  }

}
