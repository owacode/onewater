import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwxComponent } from './owx.component';

describe('OwxComponent', () => {
  let component: OwxComponent;
  let fixture: ComponentFixture<OwxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
