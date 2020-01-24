import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedContentComponent } from './submitted-content.component';

describe('SubmittedContentComponent', () => {
  let component: SubmittedContentComponent;
  let fixture: ComponentFixture<SubmittedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
