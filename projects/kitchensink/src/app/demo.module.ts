import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {DemoAppComponent} from './demo.component';


import {MatIconModule, MatTabsModule} from '@angular/material';
import {DemoTypographyComponent} from './demo-typography/demo-typography.component';
import {DemoButtonsModule} from './demo-buttons/demo-buttons.module';
import {DemoAppHeaderModule} from './demo-app-header/demo-app-header.module';
import {HttpClientModule} from '@angular/common/http';

import * as pkg from '../../../../package.json';
import {DemoNotificationsModule} from './demo-notifications/demo-notifications.module';
import {
  CBP_APPLICATIONS_SERVICE,
  CBP_FEEDBACK_SERVICE,
  CBP_USER_SERVICE,
  CBPAppHeaderModule,
  CBPHeaderModule,
  CBPNotificationsModule,
  CBPRootModule,
  MockApplicationsService,
  MockFeedbackService,
  MockUserService
} from 'ngx-cbp-theme';

export const KITCHENSINK_APP_VERSION = (<any>pkg).version;

@NgModule({
  declarations: [
    DemoAppComponent,
    DemoTypographyComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    MatTabsModule, MatIconModule, // MdTabsModule is used only for demo cbp-app-header
    CBPRootModule,
    CBPHeaderModule,
    CBPAppHeaderModule,
    CBPNotificationsModule,
    DemoButtonsModule,
    DemoAppHeaderModule,
    DemoNotificationsModule
  ],
  exports: [DemoButtonsModule, DemoAppHeaderModule],
  providers: [
    MockUserService,
    MockApplicationsService,
    MockFeedbackService,
    {provide: CBP_USER_SERVICE, useExisting: MockUserService},
    {provide: CBP_FEEDBACK_SERVICE, useExisting: MockFeedbackService},
    {provide: CBP_APPLICATIONS_SERVICE, useExisting: MockApplicationsService}
  ],
  schemas: [],
  bootstrap: [DemoAppComponent]
})
export class DemoAppModule {
  constructor(applicationsService: MockApplicationsService, userService: MockUserService) {
    // Handle your SSO login here for now
    userService.loginInProgress = true;
    // set this delay to zero if already loggedIn
    // and implement userService so that getUser() immediately returns subject after login()
    userService.login(3000);
    applicationsService.getCurrentApp().subscribe(currentApp => {
      currentApp.version = `v${KITCHENSINK_APP_VERSION}`;
    });
  }
}



