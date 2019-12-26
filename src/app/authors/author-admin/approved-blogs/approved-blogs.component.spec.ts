import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedBlogsComponent } from './approved-blogs.component';

describe('ApprovedBlogsComponent', () => {
  let component: ApprovedBlogsComponent;
  let fixture: ComponentFixture<ApprovedBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
