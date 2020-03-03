import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmApprovedBlogsComponent } from './cm-approved-blogs.component';

describe('CmApprovedBlogsComponent', () => {
  let component: CmApprovedBlogsComponent;
  let fixture: ComponentFixture<CmApprovedBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmApprovedBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmApprovedBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
