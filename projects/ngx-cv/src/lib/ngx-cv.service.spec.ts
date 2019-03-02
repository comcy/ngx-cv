import { TestBed } from '@angular/core/testing';

import { NgxCvService } from './ngx-cv.service';

describe('NgxCvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCvService = TestBed.get(NgxCvService);
    expect(service).toBeTruthy();
  });
});
