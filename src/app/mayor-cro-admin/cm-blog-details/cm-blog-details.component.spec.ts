import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmBlogDetailsComponent } from './cm-blog-details.component';

describe('CmBlogDetailsComponent', () => {
  let component: CmBlogDetailsComponent;
  let fixture: ComponentFixture<CmBlogDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmBlogDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmBlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
