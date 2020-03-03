import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmPostVideoComponent } from './cm-post-video.component';

describe('CmPostVideoComponent', () => {
  let component: CmPostVideoComponent;
  let fixture: ComponentFixture<CmPostVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmPostVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmPostVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
