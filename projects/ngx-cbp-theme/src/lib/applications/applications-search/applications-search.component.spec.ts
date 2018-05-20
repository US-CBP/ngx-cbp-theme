import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPApplicationsSearchComponent } from './applications-search.component';
import {MatDividerModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CBP_APPLICATIONS_SERVICE} from '../cbp-applications-service';
import {MockApplicationsService} from '../../../mock-services/applications.mock.service';
import {MockUserService} from '../../../mock-services/user.mock.service';
import {CBP_USER_SERVICE} from '../../user/user';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('CBPApplicationsSearchComponent', () => {
  let component: CBPApplicationsSearchComponent;
  let fixture: ComponentFixture<CBPApplicationsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule , NoopAnimationsModule, MatDividerModule],
      declarations: [ CBPApplicationsSearchComponent ],
      providers: [
          {provide: CBP_APPLICATIONS_SERVICE, useClass: MockApplicationsService},
          {provide: CBP_USER_SERVICE, useClass: MockUserService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPApplicationsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
