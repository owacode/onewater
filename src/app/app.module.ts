import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponentsComponent } from './landing-components/landing-components.component';
import { LandingPageComponent } from './landing-components/landing-page/landing-page.component';
import { BlogWebsiteComponent } from './blog-website/blog-website.component';
import { JobPortalComponent } from './job-portal/job-portal.component';
import { VideoWebsiteComponent } from './video-website/video-website.component';

import { NgxPayPalModule } from 'ngx-paypal';
@NgModule({
  declarations: [
    AppComponent, NavbarComponent, FooterComponent, LandingComponentsComponent, LandingPageComponent, BlogWebsiteComponent, JobPortalComponent, VideoWebsiteComponent
  ],exports:[],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    NgxPayPalModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
