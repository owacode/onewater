import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingBlogsComponent } from './pending-blogs.component';

describe('PendingBlogsComponent', () => {
  let component: PendingBlogsComponent;
  let fixture: ComponentFixture<PendingBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
