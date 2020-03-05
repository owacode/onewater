import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MayorAdminComponent } from './mayor-admin.component';
import { CmDashboardComponent } from './cm-dashboard/cm-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MayorAdminComponent,
    children: [
      { path: '', component:CmDashboardComponent },
      { path: 'mayor-all-blogs', loadChildren:'./cm-all-blogs/cm-all-blogs.module#CmAllBlogsModule' },
      { path: 'mayor-approved-blogs', loadChildren:'./cm-approved-blogs/cm-approved-blogs.module#CmApprovedBlogsModule' },
      { path: 'mayor-pending-blogs', loadChildren:'./cm-pending-blogs/cm-pending-blogs.module#CmPendingBlogsModule' },
      { path: 'mayor-saved-blogs', loadChildren:'./cm-saved-blogs/cm-saved-blogs.module#CmSavedBlogsModule' },
      { path: 'mayor-videos', loadChildren: './cm-author-videos/cm-author-videos.module#CmAuthorVideosModule' },
      { path: 'mayor-post-blog', loadChildren: './cm-post-blog/cm-post-blog.module#CmPostBlogModule' },
      { path: 'mayor-post-video', loadChildren: './cm-post-video/cm-post-video.module#CmPostVideoModule' },
      { path: 'mayor-edit-profile', loadChildren: './cm-author-edit-profile/cm-author-edit-profile.module#CmAuthorEditProfileModule' },
      { path: 'mayor-blog-details', loadChildren: './cm-blog-details/cm-blog-details.module#CmBlogDetailsModule' },
      { path: 'mayor-edit-blog', loadChildren: './cm-edit-saved-blogs/cm-edit-saved-blogs.module#CmEditSavedBlogsModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MayorAdminRoutingModule { }
