import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorAdminComponent } from './author-admin.component';
import { AuthorDashboardComponent } from './author-dashboard/author-dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: AuthorAdminComponent,
    children: [
      { path: '', component:AuthorDashboardComponent },
      { path: 'blog-details/:id', loadChildren: './blog-details/blog-details.module#BlogDetailsModule' },
      { path: 'post-blog', loadChildren: './post-blog/post-blog.module#PostBlogModule' },
      { path: 'edit-profile', loadChildren: './author-edit-profile/author-edit-profile.module#AuthorEditProfileModule' },
      { path: 'all-blogs', loadChildren: './all-blogs/all-blogs.module#AllBlogsModule' },
      { path: 'saved-blogs', loadChildren: './saved-blogs/saved-blogs.module#SavedBlogsModule' },
      { path: 'edit-blog', loadChildren: './edit-saved-blogs/edit-saved-blogs.module#EditSavedBlogsModule' },
      { path: 'approved-blogs', loadChildren: './approved-blogs/approved-blogs.module#ApprovedBlogsModule' },
      { path: 'pending-blogs', loadChildren: './pending-blogs/pending-blogs.module#PendingBlogsModule' },
      { path: 'post-video', loadChildren: './post-video/post-video.module#PostVideoModule' },
      { path: 'videos', loadChildren: './author-videos/author-videos.module#AuthorVideosModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorAdminRoutingModule { }
