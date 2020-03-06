import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroEditSavedBlogComponent } from './cro-edit-saved-blog.component';

describe('CroEditSavedBlogComponent', () => {
  let component: CroEditSavedBlogComponent;
  let fixture: ComponentFixture<CroEditSavedBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroEditSavedBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroEditSavedBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
