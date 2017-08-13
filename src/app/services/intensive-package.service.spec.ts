import { TestBed, inject } from '@angular/core/testing';

import { IntensivePackageService } from './intensive-package.service';

describe('IntensivePackageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntensivePackageService]
    });
  });

  it('should ...', inject([IntensivePackageService], (service: IntensivePackageService) => {
    expect(service).toBeTruthy();
  }));
});
