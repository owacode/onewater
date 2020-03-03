import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorPostComponent } from './mayor-post.component';

describe('MayorPostComponent', () => {
  let component: MayorPostComponent;
  let fixture: ComponentFixture<MayorPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayorPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayorPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
