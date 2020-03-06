import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CroAdminComponent } from './cro-admin.component';
import { CroDashboardComponent } from './cro-dashboard/cro-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: CroAdminComponent,
    children: [
      { path: '', component:CroDashboardComponent },
      { path: 'cro-all-blogs', loadChildren:'./cro-all-blogs/cro-all-blogs.module#CroAllBlogsModule' },
      { path: 'cro-approved-blogs', loadChildren:'./cro-approved-blogs/cro-approved-blogs.module#CroApprovedBlogsModule' },
      { path: 'cro-pending-blogs', loadChildren:'./cro-pending-blogs/cro-pending-blogs.module#CroPendingBlogsModule' },
      { path: 'cro-saved-blogs', loadChildren:'./cro-saved-blogs/cro-saved-blogs.module#CroSavedBlogsModule' },
      { path: 'cro-videos', loadChildren: './cro-author-videos/cro-author-videos.module#CroAuthorVideosModule' },
      { path: 'cro-post-blog', loadChildren: './cro-post-blog/cro-post-blog.module#CroPostBlogModule' },
      { path: 'cro-post-video', loadChildren: './cro-post-video/cro-post-video.module#CroPostVideoModule' },
      { path: 'cro-edit-profile', loadChildren: './cro-author-edit-profile/cro-author-edit-profile.module#CroAuthorEditProfileModule' },
      { path: 'cro-blog-details', loadChildren: './cro-blog-details/cro-blog-details.module#CroBlogDetailsModule' },
      { path: 'cro-edit-blog', loadChildren: './cro-edit-saved-blog/cro-edit-saved-blog.module#CroEditSavedBlogModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CroAdminRoutingModule { }