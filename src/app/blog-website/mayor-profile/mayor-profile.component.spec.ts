import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorProfileComponent } from './mayor-profile.component';

describe('MayorProfileComponent', () => {
  let component: MayorProfileComponent;
  let fixture: ComponentFixture<MayorProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayorProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
