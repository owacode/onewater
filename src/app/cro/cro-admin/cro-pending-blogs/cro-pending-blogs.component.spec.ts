import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroPendingBlogsComponent } from './cro-pending-blogs.component';

describe('CroPendingBlogsComponent', () => {
  let component: CroPendingBlogsComponent;
  let fixture: ComponentFixture<CroPendingBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroPendingBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroPendingBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
