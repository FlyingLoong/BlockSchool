import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registration1Component } from './registration-1.component';

describe('Registration1Component', () => {
  let component: Registration1Component;
  let fixture: ComponentFixture<Registration1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registration1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registration1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
