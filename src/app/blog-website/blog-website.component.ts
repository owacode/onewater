import { Component, OnInit } from '@angular/core';
import { AuthorAuthService } from '../authors/services/author-auth.service';
import { ModalFunctions } from '../shared-functions/modal-functions';

@Component({
  selector: 'app-blog-website',
  templateUrl: './blog-website.component.html',
  styleUrls: ['./blog-website.component.scss']
})
export class BlogWebsiteComponent implements OnInit {
  constructor(public auth:AuthorAuthService,public modal: ModalFunctions) { }

  ngOnInit() {

  }
}
