import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerfiedInstructorComponent } from './email-verfied-instructor.component';

describe('EmailVerfiedInstructorComponent', () => {
  let component: EmailVerfiedInstructorComponent;
  let fixture: ComponentFixture<EmailVerfiedInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailVerfiedInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailVerfiedInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
