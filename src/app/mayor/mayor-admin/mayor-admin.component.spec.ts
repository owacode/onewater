import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorAdminComponent } from './mayor-admin.component';

describe('MayorAdminComponent', () => {
  let component: MayorAdminComponent;
  let fixture: ComponentFixture<MayorAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayorAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
