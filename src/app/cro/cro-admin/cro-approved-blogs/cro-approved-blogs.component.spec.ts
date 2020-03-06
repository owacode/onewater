import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroApprovedBlogsComponent } from './cro-approved-blogs.component';

describe('CroApprovedBlogsComponent', () => {
  let component: CroApprovedBlogsComponent;
  let fixture: ComponentFixture<CroApprovedBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroApprovedBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroApprovedBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
