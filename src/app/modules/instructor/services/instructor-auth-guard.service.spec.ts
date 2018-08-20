import { TestBed, inject } from '@angular/core/testing';

import { InstructorAuthGuardService } from './instructor-auth-guard.service';

describe('InstructorAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstructorAuthGuardService]
    });
  });

  it('should be created', inject([InstructorAuthGuardService], (service: InstructorAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
