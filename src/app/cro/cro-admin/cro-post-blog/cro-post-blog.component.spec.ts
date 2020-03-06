import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroPostBlogComponent } from './cro-post-blog.component';

describe('CroPostBlogComponent', () => {
  let component: CroPostBlogComponent;
  let fixture: ComponentFixture<CroPostBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroPostBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroPostBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
