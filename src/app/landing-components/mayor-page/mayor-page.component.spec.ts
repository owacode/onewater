import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorPageComponent } from './mayor-page.component';

describe('MayorPageComponent', () => {
  let component: MayorPageComponent;
  let fixture: ComponentFixture<MayorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
