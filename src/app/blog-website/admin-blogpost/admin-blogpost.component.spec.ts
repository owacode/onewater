import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogpostComponent } from './admin-blogpost.component';

describe('AdminBlogpostComponent', () => {
  let component: AdminBlogpostComponent;
  let fixture: ComponentFixture<AdminBlogpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBlogpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
