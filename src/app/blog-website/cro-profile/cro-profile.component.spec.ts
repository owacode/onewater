import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroProfileComponent } from './cro-profile.component';

describe('CroProfileComponent', () => {
  let component: CroProfileComponent;
  let fixture: ComponentFixture<CroProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
