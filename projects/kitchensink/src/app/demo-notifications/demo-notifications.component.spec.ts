import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNotificationsComponent } from './demo-notifications.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CBPNotificationsService } from 'ngx-cbp-theme';

describe('DemoNotificationsComponent', () => {
  let component: DemoNotificationsComponent;
  let fixture: ComponentFixture<DemoNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemoNotificationsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [CBPNotificationsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
