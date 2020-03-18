import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerifiedLeaderComponent } from './email-verified-leader.component';

describe('EmailVerifiedLeaderComponent', () => {
  let component: EmailVerifiedLeaderComponent;
  let fixture: ComponentFixture<EmailVerifiedLeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailVerifiedLeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailVerifiedLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
