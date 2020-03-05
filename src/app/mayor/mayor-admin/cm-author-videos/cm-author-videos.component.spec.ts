import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmAuthorVideosComponent } from './cm-author-videos.component';

describe('CmAuthorVideosComponent', () => {
  let component: CmAuthorVideosComponent;
  let fixture: ComponentFixture<CmAuthorVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmAuthorVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmAuthorVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
