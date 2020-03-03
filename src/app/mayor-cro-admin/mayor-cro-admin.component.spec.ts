import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorCroAdminComponent } from './mayor-cro-admin.component';

describe('MayorCroAdminComponent', () => {
  let component: MayorCroAdminComponent;
  let fixture: ComponentFixture<MayorCroAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayorCroAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayorCroAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
