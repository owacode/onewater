import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroPageComponent } from './cro-page.component';

describe('CroPageComponent', () => {
  let component: CroPageComponent;
  let fixture: ComponentFixture<CroPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
