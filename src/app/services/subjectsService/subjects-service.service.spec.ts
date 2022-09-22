import { TestBed } from '@angular/core/testing';

import { SubjectsServiceService } from './subjects-service.service';

describe('SubjectsServiceService', () => {
  let service: SubjectsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
