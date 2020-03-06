import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroBlogDetailsComponent } from './cro-blog-details.component';

describe('CroBlogDetailsComponent', () => {
  let component: CroBlogDetailsComponent;
  let fixture: ComponentFixture<CroBlogDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroBlogDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroBlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
