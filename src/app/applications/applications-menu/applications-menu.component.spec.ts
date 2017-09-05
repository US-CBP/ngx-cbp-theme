import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPApplicationsMenuComponent } from './applications-menu.component';
import {MdIconModule, MdMenuModule} from '@angular/material';
import {CBPProgressModule} from '../../progress/progress.module';
import {CBPPipesModule} from '../../pipes/pipes.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CBP_APPLICATIONS_SERVICE} from '../cbp-applications-service';
import {MockApplicationsService} from '../../../mock-services/applications.mock.service';
import {CBP_USER_SERVICE} from '../../user/user';
import {MockUserService} from '../../../mock-services/user.mock.service';

describe('CBPApplicationsMenuComponent', () => {
  let component: CBPApplicationsMenuComponent;
  let fixture: ComponentFixture<CBPApplicationsMenuComponent>;

  beforeEach(async(() => {
    // const  spiedAppService = jasmine.createSpy('mockAppService' , MockAppService);
    TestBed.configureTestingModule({
      imports: [MdMenuModule, MdIconModule, CBPProgressModule, CBPPipesModule, FlexLayoutModule],
      declarations: [ CBPApplicationsMenuComponent ],
      providers: [
          {provide: CBP_APPLICATIONS_SERVICE, useClass: MockApplicationsService},
          {provide: CBP_USER_SERVICE, useClass: MockUserService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPApplicationsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
