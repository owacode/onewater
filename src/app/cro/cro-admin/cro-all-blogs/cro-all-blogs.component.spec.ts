import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroAllBlogsComponent } from './cro-all-blogs.component';

describe('CroAllBlogsComponent', () => {
  let component: CroAllBlogsComponent;
  let fixture: ComponentFixture<CroAllBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroAllBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroAllBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
