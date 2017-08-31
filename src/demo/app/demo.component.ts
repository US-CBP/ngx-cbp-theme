import {Component} from '@angular/core';

import {MockUserService} from './mock-services/user.mock.service';
import {CBP_USER_SERVICE} from '../../app/user/user';
import {CBP_APPLICATIONS_SERVICE} from '../../app/header/applications.service';
import {MockApplicationsService} from './mock-services/applications.mock.service';



@Component({
  selector: 'demo-app-root',
  moduleId: module.id,
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  providers: [
      { provide: CBP_USER_SERVICE,          useClass: MockUserService },
      { provide: CBP_APPLICATIONS_SERVICE,  useClass: MockApplicationsService }]
})
export class DemoAppComponent {

}


