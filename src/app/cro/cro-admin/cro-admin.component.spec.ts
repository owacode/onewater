import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroAdminComponent } from './cro-admin.component';

describe('CroAdminComponent', () => {
  let component: CroAdminComponent;
  let fixture: ComponentFixture<CroAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
