import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPNotificationsOverlayComponent } from './cbp-notifications-overlay.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {PortalModule} from '@angular/cdk/portal';
import {CBPNotificationsService} from '../cbp-notifications.service';

describe('CBPNotificationsOverlayComponent', () => {
  let component: CBPNotificationsOverlayComponent;
  let fixture: ComponentFixture<CBPNotificationsOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBPNotificationsOverlayComponent ],
      imports: [PortalModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [CBPNotificationsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPNotificationsOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
