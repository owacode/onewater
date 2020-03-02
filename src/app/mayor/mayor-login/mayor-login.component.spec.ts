import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorLoginComponent } from './mayor-login.component';

describe('MayorLoginComponent', () => {
  let component: MayorLoginComponent;
  let fixture: ComponentFixture<MayorLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayorLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
