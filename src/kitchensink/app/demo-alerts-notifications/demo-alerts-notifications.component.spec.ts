import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAlertsNotificationsComponent } from './demo-alerts-notifications.component';

describe('DemoAlertsNotificationsComponent', () => {
  let component: DemoAlertsNotificationsComponent;
  let fixture: ComponentFixture<DemoAlertsNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAlertsNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAlertsNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
