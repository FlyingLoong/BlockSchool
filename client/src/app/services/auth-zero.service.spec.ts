import { TestBed, inject } from '@angular/core/testing';

import { AuthZeroService } from './auth-zero.service';

describe('AuthZeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthZeroService]
    });
  });

  it('should ...', inject([AuthZeroService], (service: AuthZeroService) => {
    expect(service).toBeTruthy();
  }));
});
