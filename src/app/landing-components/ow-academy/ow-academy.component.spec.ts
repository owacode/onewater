import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwAcademyComponent } from './ow-academy.component';

describe('OwAcademyComponent', () => {
  let component: OwAcademyComponent;
  let fixture: ComponentFixture<OwAcademyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwAcademyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
