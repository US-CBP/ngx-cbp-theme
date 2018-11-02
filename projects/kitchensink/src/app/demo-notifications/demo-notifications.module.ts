import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoNotificationsComponent } from './demo-notifications.component';
import {CBPNotificationsModule} from 'ngx-cbp-theme';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, CBPNotificationsModule, MatIconModule,
    FlexLayoutModule
  ],
  declarations: [DemoNotificationsComponent],
  exports: [DemoNotificationsComponent]
})
export class DemoNotificationsModule { }
