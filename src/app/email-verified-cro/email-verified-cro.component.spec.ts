import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerifiedCroComponent } from './email-verified-cro.component';

describe('EmailVerifiedCroComponent', () => {
  let component: EmailVerifiedCroComponent;
  let fixture: ComponentFixture<EmailVerifiedCroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailVerifiedCroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailVerifiedCroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
