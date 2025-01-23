import { TestBed } from '@angular/core/testing';

import { VassSideMenuService } from './vass-side-menu.service';

describe('VassSideMenuService', () => {
  let service: VassSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VassSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
