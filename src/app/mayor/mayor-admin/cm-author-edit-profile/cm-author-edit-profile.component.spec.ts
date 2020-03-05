import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmAuthorEditProfileComponent } from './cm-author-edit-profile.component';

describe('CmAuthorEditProfileComponent', () => {
  let component: CmAuthorEditProfileComponent;
  let fixture: ComponentFixture<CmAuthorEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmAuthorEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmAuthorEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
