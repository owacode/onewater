import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroLoginComponent } from './cro-login.component';

describe('CroLoginComponent', () => {
  let component: CroLoginComponent;
  let fixture: ComponentFixture<CroLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
