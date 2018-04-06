import { TestBed, async } from '@angular/core/testing';

import {DemoAppComponent} from './demo.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {CBPRootModule} from '../../app/cbp-root/cbp-root.module';
import {CBPAccordionModule} from '../../app/accordion/accordion.module';
import {CBPAppHeaderModule , CBPHeaderModule} from '../../app/header';

import {DemoCBPAccordionComponent} from './demo-cbp-accordion/demo-cbp-accordion.component';
import {DemoTypographyComponent} from './demo-typography/demo-typography.component';

import {DemoButtonsModule} from './demo-buttons/demo-buttons.module';
import {DemoAppHeaderModule} from './demo-app-header/demo-app-header.module';
import {MockUserService} from '../../mock-services/user.mock.service';
import {MockApplicationsService} from '../../mock-services/applications.mock.service';
import {CBP_APPLICATIONS_SERVICE} from '../../app/applications/cbp-applications-service';
import {CBP_USER_SERVICE} from '../../app/user/user';
import {DemoNotificationsModule} from './demo-notifications/demo-notifications.module';
import {CBPNotificationsModule} from '../../app/notifications';

describe('DemoAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [BrowserModule, NoopAnimationsModule,
            CBPRootModule,
            CBPAccordionModule,
            CBPHeaderModule,
            CBPAppHeaderModule,
            CBPNotificationsModule,
            DemoButtonsModule,
            DemoAppHeaderModule,
            DemoNotificationsModule
        ],
        declarations: [
            DemoAppComponent,
            DemoCBPAccordionComponent,
            DemoTypographyComponent],
        providers: [
            MockUserService,
            MockApplicationsService,
            { provide: CBP_USER_SERVICE,          useExisting: MockUserService },
            { provide: CBP_APPLICATIONS_SERVICE,  useExisting: MockApplicationsService }
        ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(DemoAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
