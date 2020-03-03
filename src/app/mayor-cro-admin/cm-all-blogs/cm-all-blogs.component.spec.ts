import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmAllBlogsComponent } from './cm-all-blogs.component';

describe('CmAllBlogsComponent', () => {
  let component: CmAllBlogsComponent;
  let fixture: ComponentFixture<CmAllBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmAllBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmAllBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
