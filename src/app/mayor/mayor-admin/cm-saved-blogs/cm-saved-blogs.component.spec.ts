import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmSavedBlogsComponent } from './cm-saved-blogs.component';

describe('CmSavedBlogsComponent', () => {
  let component: CmSavedBlogsComponent;
  let fixture: ComponentFixture<CmSavedBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmSavedBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmSavedBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
