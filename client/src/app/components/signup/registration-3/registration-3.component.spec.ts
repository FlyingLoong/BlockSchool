import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registration3Component } from './registration-3.component';

describe('Registration3Component', () => {
  let component: Registration3Component;
  let fixture: ComponentFixture<Registration3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registration3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registration3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
