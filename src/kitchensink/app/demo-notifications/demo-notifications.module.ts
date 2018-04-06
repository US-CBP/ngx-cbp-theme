import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoNotificationsComponent } from './demo-notifications.component';
import {CBPNotificationsModule} from '../../../app/notifications';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, CBPNotificationsModule
  ],
  declarations: [DemoNotificationsComponent],
  exports: [DemoNotificationsComponent]
})
export class DemoNotificationsModule { }
