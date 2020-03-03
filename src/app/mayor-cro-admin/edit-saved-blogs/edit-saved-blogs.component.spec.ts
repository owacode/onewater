import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSavedBlogsComponent } from './edit-saved-blogs.component';

describe('EditSavedBlogsComponent', () => {
  let component: EditSavedBlogsComponent;
  let fixture: ComponentFixture<EditSavedBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSavedBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSavedBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
