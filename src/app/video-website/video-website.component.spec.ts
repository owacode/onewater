import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoWebsiteComponent } from './video-website.component';

describe('VideoWebsiteComponent', () => {
  let component: VideoWebsiteComponent;
  let fixture: ComponentFixture<VideoWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
