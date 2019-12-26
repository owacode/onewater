import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateRegisterationComponent } from './candidate-registeration.component';

describe('CandidateRegisterationComponent', () => {
  let component: CandidateRegisterationComponent;
  let fixture: ComponentFixture<CandidateRegisterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateRegisterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
