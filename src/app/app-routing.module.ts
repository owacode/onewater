import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponentsComponent } from './landing-components/landing-components.component';
import { LandingPageComponent } from './landing-components/landing-page/landing-page.component';
import { BlogWebsiteComponent } from './blog-website/blog-website.component';
import { JobPortalComponent } from './job-portal/job-portal.component';
import { VideoWebsiteComponent } from './video-website/video-website.component';
import { Authguard } from './Authguard/authguard';


const routes: Routes = [

  //-----------LANDING PAGES ROUTING---------------//

  {
    path: '',
    component: LandingComponentsComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent
      },
      {
        path: 'purpose',
        loadChildren: './landing-components/about/about.module#AboutModule'
      },
      {
        path: 'give',
        loadChildren: './landing-components/donation/donation.module#DonationModule'
      },
      {
        path: 'mission',
        loadChildren: './landing-components/mission/mission.module#MissionModule'
      },
      {
        path: 'team',
        loadChildren: './landing-components/team/team.module#TeamModule'
      },
      {
        path: 'vision',
        loadChildren: './landing-components/vision/vision.module#VisionModule'
      },
      {
        path: 'learningacademy',
        loadChildren: './landing-components/ow-academy/ow-academy.module#OwAcademyModule'
      },
      {
        path: 'owx',
        loadChildren: './landing-components/owx/owx.module#OwxModule'
      },
      {
        path: 'instructor',
        loadChildren: './landing-components/instructor-page/instructor-page.module#InstructorPageModule'
      },
      {
        path: 'contact',
        loadChildren: './landing-components/contact/contact.module#ContactModule'
      },
      {
        path: 'privacy-policy',
        loadChildren: './landing-components/privacy-policy/privacy-policy.module#PrivacyPolicyModule'
      },
      {
        path: 'events',
        loadChildren: './landing-components/events/events.module#EventsModule'
      },
      {
           path: 'leaders',
           loadChildren: './landing-components/leaders/leaders.module#LeadersModule'
      },
      {
        path: 'cro-page',
        loadChildren: './landing-components/cro-page/cro-page.module#CroPageModule'
      },
      {
        path: 'mayor-page',
        loadChildren: './landing-components/mayor-page/mayor-page.module#MayorPageModule'
      }
    ]
  },

  //-----------BLOG PAGES ROUTING---------------//

  {
    path: 'onewaterblog',
    component: BlogWebsiteComponent,
    children: [
      {
        path: '',
        loadChildren: './blog-website/blog/blog.module#BlogModule'
      },
      {
        path: 'blogpost/:id',
        loadChildren: './blog-website/blog-post/blog-post.module#BlogPostModule',
        //canActivate: [Authguard]
      },
      {
        path: 'admin-blogpost/:id',
        loadChildren: './blog-website/admin-blogpost/admin-blogpost.module#AdminBlogpostModule',
        //canActivate: [Authguard]
      },
      {
        path: 'mayor-blogpost/:id',
        loadChildren: './blog-website/mayor-post/mayor-post.module#MayorPostModule',
        canActivate: [Authguard]
      },
      {
        path: 'cro-blogpost/:id',
        loadChildren: './blog-website/cro-post/cro-post.module#CroPostModule',
        canActivate: [Authguard]
      },
      {
        path: 'authorprofile/:id',
        loadChildren: './blog-website/author-page/author-page.module#AuthorPageModule'
      },
      {
        path: 'mayorprofile/:id',
        loadChildren: './blog-website/mayor-profile/mayor-profile.module#MayorProfileModule'
      },
      {
        path: 'croprofile/:id',
        loadChildren: './blog-website/cro-profile/cro-profile.module#CroProfileModule'
      },
      {
        path: 'category',
        loadChildren: './blog-website/category/category.module#CategoryModule'
      },
      // {
      //   path: 'profile',
      //   loadChildren: './blog-website/profile/profile.module#ProfileModule'
      // },
      {
        path: 'author/login',
        loadChildren: './authors/author-login/author-login.module#AuthorLoginModule'
      },
      {
        path: 'mayor/:state',
        loadChildren: './mayor/mayor-login/mayor-login.module#MayorLoginModule'
      },
      {
        path: 'cro/:state',
        loadChildren: './cro/cro-login/cro-login.module#CroLoginModule'
      },
    ]
  },
  //-----------Author Registeration page -----------------//
  {
    path: 'onewaterblog/author/signup',
    loadChildren: './authors/author-registration/author-registration.module#AuthorRegistrationModule'
  },

  //-----------CRO Registeration page -----------------//
  {
    path: 'onewaterblog/cro-reg',
    loadChildren: './cro/cro-registration/cro-registration.module#CroRegistrationModule'
  },

   //-----------Mayor Registeration page -----------------//
   {
    path: 'onewaterblog/mayor-reg',
    loadChildren: './mayor/mayor-registration/mayor-registration.module#MayorRegistrationModule'
  },

  //-----------AUTHOR ADMIN PANEL---------------//

  {
    path: 'author',
    loadChildren: './authors/author-admin/author-admin.module#AuthorAdminModule'
  },

  //-----------CRO/MAYOR AUTHOR ADMIN PANEL---------------//
  {
    path: 'mayor',
    loadChildren: './mayor/mayor-admin/mayor-admin.module#MayorAdminModule'
  },
  {
    path: 'cro',
    loadChildren: './cro/cro-admin/cro-admin.module#CroAdminModule'
  },
  //-----------JOB PAGES ROUTING---------------//
  {
    path: 'onewaterjobs',
    component: JobPortalComponent,
    children: [
      {
        path: '',
        loadChildren: './job-portal/job-home/job-home.module#JobHomeModule'
      },
      {
        path: 'jobdesc/:id',
        loadChildren: './job-portal/job-desc/job-desc.module#JobDescModule'
      },
      {
        path: 'joblist',
        loadChildren: './job-portal/job-list/job-list.module#JobListModule'
      },
      {
        path: 'can-details',
        loadChildren: './job-portal/candidate-details/candidate-details.module#CandidateDetailsModule'
      },
      {
        path: 'emp-details/:id',
        loadChildren: './job-portal/employer-details/employer-details.module#EmployerDetailsModule'
      },
      {
        path: 'emp-login',
        loadChildren: './employers/employer-login/employer-login.module#EmployerLoginModule'
      }
    ]
  },
  //-----------Employer Registeration page -----------------//
  {
    path: 'onewaterjobs/emp-reg',
    loadChildren: './employers/employer-registeration/employer-registeration.module#EmployerRegisterationModule'
  },

  //-----------EMPLOYER ADMIN PANEL---------------//
  {
    path: 'employer',
    loadChildren: './employers/employer-admin/employer-admin.module#EmployerAdminModule'
  },


  //-----------VIDEO PAGES ROUTING---------------//

  {
    path: 'onewatertalks',
    component: VideoWebsiteComponent,
    children: [
      {
        path: '',
        loadChildren: './video-website/home/home.module#HomeModule'
      },
      {
        path: 'singlevideo/:id',
        loadChildren: './video-website/single-video/single-video.module#SingleVideoModule'
      },
      {
        path: 'videos',
        loadChildren: './video-website/videos/videos.module#VideosModule'
      },
      {
        path: 'video-category',
        loadChildren: './video-website/video-category/video-category.module#VideoCategoryModule'
      }
    ]
  },
  //-----------Instructor Form page -----------------//
  {
    path:'instructor-form',
    loadChildren: './instructors/instructor-form/instructor-form.module#InstructorFormModule'
  },
  //-----------Instructor Login page -----------------//
    {
      path:'instructor/:state',
      loadChildren: './instructors/instructor-login/instructor-login.module#InstructorLoginModule'
    },

  //-----------Instructor Registration page -----------------//
  {
    path: 'instructor-reg',
    loadChildren: './instructors/instructor-registration/instructor-registration.module#InstructorRegistrationModule'
  },

  //-----------Instructor Admin Panel -----------------//
  {
    path: 'instructor-admin',
    loadChildren: './instructors/instructor-admin/instructor-admin.module#InstructorAdminModule'
  },

  //-----------User Registeration page -----------------//
  {
    path: 'user-reg',
    loadChildren: './user-registration/user-registration.module#UserRegistrationModule'
  },

  //-----------USER ADMIN PANEL---------------//
  {
    path: 'user-admin',
    loadChildren: './user-admin/user-admin.module#UserAdminModule',
    //canActivate: [Authguard]
  },

  //-----------CANDIDATE ADMIN PANEL---------------//

  {
    path: 'candidate-admin',
    loadChildren: './candidates/candidates.module#CandidatesModule'
  },

  //-----------OTHER PAGES ROUTING---------------//

  {
    path: 'signup-role',
    loadChildren: './role-signup/role-signup.module#RoleSignupModule'
  },
  {
    path: 'login-role',
    loadChildren: './role-login/role-login.module#RoleLoginModule'
  },
  {
    path: 'signup',
    loadChildren: './login-signup/login-signup.module#LoginSignupModule'
  },
  {
    path: 'login',
    loadChildren: './user-login/user-login.module#UserLoginModule'
  },
  {
    path: 'recover-password/:token',
    loadChildren: './recover-password/recover-password.module#RecoverPasswordModule'
  },
  {
    path: 'thankyou-user',
    loadChildren: './email-verified-employer/email-verified-employer.module#EmailVerifiedEmployerModule'
  },
  {
    path: 'thankyou-author',
    loadChildren: './email-verified-author/email-verified-author.module#EmailVerifiedAuthorModule'
  },
  {
    path: 'thankyou-leader',
    loadChildren: './email-verified-leader/email-verified-leader.module#EmailVerifiedLeaderModule'
  },
  {
    path: 'thankyou-cro',
    loadChildren: './email-verified-cro/email-verified-cro.module#EmailVerifiedCroModule'
  },
  {
    path: 'thankyou-instructor',
    loadChildren: './email-verfied-instructor/email-verfied-instructor.module#EmailVerfiedInstructorModule'
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    Authguard
  ],
})
export class AppRoutingModule { }
