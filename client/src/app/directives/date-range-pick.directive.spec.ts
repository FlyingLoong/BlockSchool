import { DateRangePickDirective } from './date-range-pick.directive';
import {  ElementRef } from '@angular/core';

// still a problem to be solved here ...
const el: ElementRef = null;

describe('DateRangePickDirective', () => {
  it('should create an instance', () => {
    const directive = new DateRangePickDirective(el);
    expect(directive).toBeTruthy();
  });
});
