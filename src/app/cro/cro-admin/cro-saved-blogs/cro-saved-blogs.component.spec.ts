import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroSavedBlogsComponent } from './cro-saved-blogs.component';

describe('CroSavedBlogsComponent', () => {
  let component: CroSavedBlogsComponent;
  let fixture: ComponentFixture<CroSavedBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroSavedBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroSavedBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
