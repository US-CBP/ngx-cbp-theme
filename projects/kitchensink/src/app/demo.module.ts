import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// import { CBPRootModule} from '../../app/cbp-root' ;
import {} from '../../app/header' ;
import {} from '../../app/accordion' ;

import {DemoAppComponent} from './demo.component';
import {MockUserService} from '../../../mock-services/user.mock.service';

import {MatIconModule, MatTabsModule} from '@angular/material';

import {DemoCBPAccordionComponent} from './demo-cbp-accordion/demo-cbp-accordion.component';
import {DemoTypographyComponent} from './demo-typography/demo-typography.component';
import {DemoButtonsModule} from './demo-buttons/demo-buttons.module';
import {DemoAppHeaderModule} from './demo-app-header/demo-app-header.module';
import {HttpClientModule} from '@angular/common/http';
import {MockApplicationsService} from '../../../mock-services/applications.mock.service';
import * as pkg from '../../../../package.json';
import {DemoNotificationsModule} from './demo-notifications/demo-notifications.module';
import {
  CBPRootModule,
  CBPHeaderModule,
  CBPAppHeaderModule,
  CBPAccordionModule,
  CBP_USER_SERVICE,
  CBP_APPLICATIONS_SERVICE,
  CBPNotificationsModule
} from 'ngx-cbp-theme';

export const KITCHENSINK_APP_VERSION = (<any>pkg).version;

@NgModule({
  declarations: [
    DemoAppComponent,
    DemoCBPAccordionComponent,
    DemoTypographyComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    MatTabsModule, MatIconModule, // MdTabsModule is used only for demo cbp-app-header
    CBPRootModule,
    CBPAccordionModule,
    CBPHeaderModule,
    CBPAppHeaderModule,
    CBPNotificationsModule,
    // CBPProgressModule,
    // demo
    DemoButtonsModule,
    DemoAppHeaderModule,
    DemoNotificationsModule
  ],
  exports: [DemoButtonsModule, DemoAppHeaderModule],
  providers: [
    MockUserService,
    MockApplicationsService,
    {provide: CBP_USER_SERVICE, useExisting: MockUserService},
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



