import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerRegisterationComponent } from './employer-registeration.component';

describe('EmployerRegisterationComponent', () => {
  let component: EmployerRegisterationComponent;
  let fixture: ComponentFixture<EmployerRegisterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerRegisterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
