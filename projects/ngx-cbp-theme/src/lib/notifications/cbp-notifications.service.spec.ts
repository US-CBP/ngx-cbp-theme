import { TestBed, inject } from '@angular/core/testing';

import { CBPNotificationsService } from './cbp-notifications.service';

describe('CBPNotificationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CBPNotificationsService]
    });
  });

  it('should be created', inject([CBPNotificationsService], (service: CBPNotificationsService) => {
    expect(service).toBeTruthy();
  }));
});
