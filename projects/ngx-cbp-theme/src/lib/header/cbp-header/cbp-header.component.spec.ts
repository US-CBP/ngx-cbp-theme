import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPHeaderComponent } from './cbp-header.component';
import { CBPHeaderModule }    from './cbp-header.module';
import { CBP_USER_SERVICE} from '../../user/user';
import  {CBP_APPLICATIONS_SERVICE } from '../../applications/cbp-applications-service';
import {MockUserService} from '../../mock-services/user.mock.service';
import {MockApplicationsService} from '../../mock-services/applications.mock.service';

describe('CBPHeaderComponent', () => {
  let component: CBPHeaderComponent;
  let fixture: ComponentFixture<CBPHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CBPHeaderModule],
      providers: [
          {provide: CBP_USER_SERVICE, useClass: MockUserService},
          {provide: CBP_APPLICATIONS_SERVICE, useClass: MockApplicationsService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});


