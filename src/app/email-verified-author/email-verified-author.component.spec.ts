import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerifiedAuthorComponent } from './email-verified-author.component';

describe('EmailVerifiedAuthorComponent', () => {
  let component: EmailVerifiedAuthorComponent;
  let fixture: ComponentFixture<EmailVerifiedAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailVerifiedAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailVerifiedAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
