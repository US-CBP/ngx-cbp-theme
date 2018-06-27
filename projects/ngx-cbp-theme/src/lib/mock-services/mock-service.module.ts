import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MockApplicationsService} from './applications.mock.service';
import {MockUserService} from './user.mock.service';
import {MockFeedbackService} from './feedback.mock.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [MockApplicationsService, MockUserService, MockFeedbackService]
})
export class CBPMockServicesModule { }
