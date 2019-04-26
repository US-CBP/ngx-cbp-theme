import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoNotificationsComponent} from './demo-notifications.component';
import {CBPNotificationsModule} from 'ngx-cbp-theme';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    CBPNotificationsModule,
    MatIconModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  declarations: [DemoNotificationsComponent],
  exports: [DemoNotificationsComponent]
})
export class DemoNotificationsModule {
}
