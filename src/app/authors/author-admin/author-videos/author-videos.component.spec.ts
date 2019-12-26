import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorVideosComponent } from './author-videos.component';

describe('AuthorVideosComponent', () => {
  let component: AuthorVideosComponent;
  let fixture: ComponentFixture<AuthorVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
