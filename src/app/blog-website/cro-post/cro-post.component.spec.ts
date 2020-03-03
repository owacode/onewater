import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroPostComponent } from './cro-post.component';

describe('CroPostComponent', () => {
  let component: CroPostComponent;
  let fixture: ComponentFixture<CroPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
