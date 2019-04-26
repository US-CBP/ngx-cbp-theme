import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPNotificationComponent } from './cbp-notification.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CBPNotificationComponent', () => {
  let component: CBPNotificationComponent;
  let fixture: ComponentFixture<CBPNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CBPNotificationComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
