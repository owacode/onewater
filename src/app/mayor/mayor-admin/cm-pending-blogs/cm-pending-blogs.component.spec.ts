import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmPendingBlogsComponent } from './cm-pending-blogs.component';

describe('CmPendingBlogsComponent', () => {
  let component: CmPendingBlogsComponent;
  let fixture: ComponentFixture<CmPendingBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmPendingBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmPendingBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
