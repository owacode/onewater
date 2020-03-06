import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroPostVideoComponent } from './cro-post-video.component';

describe('CroPostVideoComponent', () => {
  let component: CroPostVideoComponent;
  let fixture: ComponentFixture<CroPostVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroPostVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroPostVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
