import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanDetailsComponent } from './can-details.component';

describe('CanDetailsComponent', () => {
  let component: CanDetailsComponent;
  let fixture: ComponentFixture<CanDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
