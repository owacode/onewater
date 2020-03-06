import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroAuthorEditProfileComponent } from './cro-author-edit-profile.component';

describe('CroAuthorEditProfileComponent', () => {
  let component: CroAuthorEditProfileComponent;
  let fixture: ComponentFixture<CroAuthorEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroAuthorEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroAuthorEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
