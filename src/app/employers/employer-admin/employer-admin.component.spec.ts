import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerAdminComponent } from './employer-admin.component';

describe('EmployerAdminComponent', () => {
  let component: EmployerAdminComponent;
  let fixture: ComponentFixture<EmployerAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
