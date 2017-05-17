import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registration4Component } from './registration-4.component';

describe('Registration4Component', () => {
  let component: Registration4Component;
  let fixture: ComponentFixture<Registration4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registration4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registration4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
