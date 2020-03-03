import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MayorCroAdminComponent } from './mayor-cro-admin.component';
import { CmDashboardComponent } from './cm-dashboard/cm-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MayorCroAdminComponent,
    children: [
      { path: '', component:CmDashboardComponent },
      { path: 'cm-all-blogs', loadChildren:'./cm-all-blogs/cm-all-blogs.module#CmAllBlogsModule' },
      { path: 'cm-approved-blogs', loadChildren:'./cm-approved-blogs/cm-approved-blogs.module#CmApprovedBlogsModule' },
      { path: 'cm-pending-blogs', loadChildren:'./cm-pending-blogs/cm-pending-blogs.module#CmPendingBlogsModule' },
      { path: 'cm-saved-blogs', loadChildren:'./cm-saved-blogs/cm-saved-blogs.module#CmSavedBlogsModule' },
      { path: 'cm-videos', loadChildren: './cm-author-videos/cm-author-videos.module#CmAuthorVideosModule' },
      { path: 'cm-post-blog', loadChildren: './cm-post-blog/cm-post-blog.module#CmPostBlogModule' },
      { path: 'cm-post-video', loadChildren: './cm-post-video/cm-post-video.module#CmPostVideoModule' },
      { path: 'cm-edit-profile', loadChildren: './cm-author-edit-profile/cm-author-edit-profile.module#CmAuthorEditProfileModule' },
      { path: 'cm-blog-details', loadChildren: './cm-blog-details/cm-blog-details.module#CmBlogDetailsModule' },
      { path: 'cm-edit-blog', loadChildren: './cm-edit-saved-blogs/cm-edit-saved-blogs.module#CmEditSavedBlogsModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MayorCroAdminRoutingModule { }
