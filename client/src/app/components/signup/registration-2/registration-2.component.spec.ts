import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registration2Component } from './registration-2.component';

describe('Registration2Component', () => {
  let component: Registration2Component;
  let fixture: ComponentFixture<Registration2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registration2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registration2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
