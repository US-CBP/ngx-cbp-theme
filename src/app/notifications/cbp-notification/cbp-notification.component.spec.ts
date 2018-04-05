import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPNotificationComponent } from './cbp-notification.component';

describe('CBPNotificationComponent', () => {
  let component: CBPNotificationComponent;
  let fixture: ComponentFixture<CBPNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBPNotificationComponent ]
    })
    .compileComponents();
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
