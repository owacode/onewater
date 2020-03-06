import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroAuthorVideosComponent } from './cro-author-videos.component';

describe('CroAuthorVideosComponent', () => {
  let component: CroAuthorVideosComponent;
  let fixture: ComponentFixture<CroAuthorVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroAuthorVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroAuthorVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
