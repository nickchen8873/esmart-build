import { TestBed } from '@angular/core/testing';

import { KernelTopService } from './kernel-top.service';

describe('KernelTopService', () => {
  let service: KernelTopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KernelTopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
