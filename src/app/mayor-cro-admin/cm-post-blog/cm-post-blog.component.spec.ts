import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmPostBlogComponent } from './cm-post-blog.component';

describe('CmPostBlogComponent', () => {
  let component: CmPostBlogComponent;
  let fixture: ComponentFixture<CmPostBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmPostBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmPostBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
