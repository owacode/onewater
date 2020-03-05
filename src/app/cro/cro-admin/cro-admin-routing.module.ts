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
    //   { path: 'cro-all-blogs', loadChildren:'./cm-all-blogs/cm-all-blogs.module#CmAllBlogsModule' },
    //   { path: 'cro-approved-blogs', loadChildren:'./cm-approved-blogs/cm-approved-blogs.module#CmApprovedBlogsModule' },
    //   { path: 'cro-pending-blogs', loadChildren:'./cm-pending-blogs/cm-pending-blogs.module#CmPendingBlogsModule' },
    //   { path: 'cro-saved-blogs', loadChildren:'./cm-saved-blogs/cm-saved-blogs.module#CmSavedBlogsModule' },
    //   { path: 'cro-videos', loadChildren: './cm-author-videos/cm-author-videos.module#CmAuthorVideosModule' },
    //   { path: 'cro-post-blog', loadChildren: './cm-post-blog/cm-post-blog.module#CmPostBlogModule' },
    //   { path: 'cro-post-video', loadChildren: './cm-post-video/cm-post-video.module#CmPostVideoModule' },
    //   { path: 'cro-edit-profile', loadChildren: './cm-author-edit-profile/cm-author-edit-profile.module#CmAuthorEditProfileModule' },
    //   { path: 'cro-blog-details', loadChildren: './cm-blog-details/cm-blog-details.module#CmBlogDetailsModule' },
    //   { path: 'cro-edit-blog', loadChildren: './cm-edit-saved-blogs/cm-edit-saved-blogs.module#CmEditSavedBlogsModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CroAdminRoutingModule { }