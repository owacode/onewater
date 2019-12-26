import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogWebsiteComponent } from './blog-website.component';

describe('BlogWebsiteComponent', () => {
  let component: BlogWebsiteComponent;
  let fixture: ComponentFixture<BlogWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
