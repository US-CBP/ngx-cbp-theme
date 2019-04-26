import { async, TestBed } from '@angular/core/testing';

import { DemoAppComponent } from './demo.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { DemoTypographyComponent } from './demo-typography/demo-typography.component';

import { DemoButtonsModule } from './demo-buttons/demo-buttons.module';
import { DemoAppHeaderModule } from './demo-app-header/demo-app-header.module';
import { DemoNotificationsModule } from './demo-notifications/demo-notifications.module';
import {
  CBP_APPLICATIONS_SERVICE,
  CBP_USER_SERVICE,
  CBPAppHeaderModule,
  CBPHeaderModule,
  CBPNotificationsModule,
  CBPRootModule,
  MockApplicationsService,
  MockUserService
} from 'ngx-cbp-theme';

describe('DemoAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, NoopAnimationsModule,
        CBPRootModule,
        CBPHeaderModule,
        CBPAppHeaderModule,
        CBPNotificationsModule,
        DemoButtonsModule,
        DemoAppHeaderModule,
        DemoNotificationsModule
      ],
      declarations: [
        DemoAppComponent,
        DemoTypographyComponent],
      providers: [
        MockUserService,
        MockApplicationsService,
        {provide: CBP_USER_SERVICE, useExisting: MockUserService},
        {provide: CBP_APPLICATIONS_SERVICE, useExisting: MockApplicationsService}
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(DemoAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
