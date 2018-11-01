import { TestBed } from '@angular/core/testing';

import { NgxCbpThemeService } from './ngx-cbp-theme.service';

describe('NgxCbpThemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCbpThemeService = TestBed.get(NgxCbpThemeService);
    expect(service).toBeTruthy();
  });
});
