import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroRegistrationComponent } from './cro-registration.component';

describe('CroRegistrationComponent', () => {
  let component: CroRegistrationComponent;
  let fixture: ComponentFixture<CroRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
