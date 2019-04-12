import { TestBed } from '@angular/core/testing';

import { HttpTaskService } from './http-task.service';

describe('HttpTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpTaskService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });
});
