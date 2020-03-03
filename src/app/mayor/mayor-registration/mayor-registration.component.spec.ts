import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorRegistrationComponent } from './mayor-registration.component';

describe('MayorRegistrationComponent', () => {
  let component: MayorRegistrationComponent;
  let fixture: ComponentFixture<MayorRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayorRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayorRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
