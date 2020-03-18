import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from './shorten.pipe';
import { SafeHtmlPipe } from './safeHtml.pipe';

@NgModule({
  declarations: [ShortenPipe,SafeHtmlPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ShortenPipe,
    SafeHtmlPipe
  ]
})

export class CommonPipesModule { }
