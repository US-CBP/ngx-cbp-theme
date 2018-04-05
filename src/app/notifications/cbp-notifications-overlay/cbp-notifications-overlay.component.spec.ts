import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPNotificationsOverlayComponent } from './cbp-notifications-overlay.component';

describe('CBPNotificationsOverlayComponent', () => {
  let component: CBPNotificationsOverlayComponent;
  let fixture: ComponentFixture<CBPNotificationsOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBPNotificationsOverlayComponent ]
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
