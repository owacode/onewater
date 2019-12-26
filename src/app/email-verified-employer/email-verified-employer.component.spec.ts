import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerifiedEmployerComponent } from './email-verified-employer.component';

describe('EmailVerifiedEmployerComponent', () => {
  let component: EmailVerifiedEmployerComponent;
  let fixture: ComponentFixture<EmailVerifiedEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailVerifiedEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailVerifiedEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
