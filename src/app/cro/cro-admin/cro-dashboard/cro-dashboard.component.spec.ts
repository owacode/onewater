import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroDashboardComponent } from './cro-dashboard.component';

describe('CroDashboardComponent', () => {
  let component: CroDashboardComponent;
  let fixture: ComponentFixture<CroDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
