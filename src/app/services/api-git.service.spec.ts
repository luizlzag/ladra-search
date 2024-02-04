import { TestBed } from '@angular/core/testing';

import { ApiGitService } from './api-git.service';

describe('ApiGitService', () => {
  let service: ApiGitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
