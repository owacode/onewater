import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorLoginChildComponent } from './instructor-login-child.component';

describe('InstructorLoginChildComponent', () => {
  let component: InstructorLoginChildComponent;
  let fixture: ComponentFixture<InstructorLoginChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorLoginChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorLoginChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
