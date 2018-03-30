import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DemoAlertsNotificationsComponent} from './demo-alerts-notifications.component';
import {MatButtonModule} from '@angular/material';
import {
    DemoToastActionsDirective, DemoToastComponent,
    DemoToastContentsDirective
} from './demo-toast/demo-toast.component';


@NgModule({
  imports: [
    CommonModule, MatButtonModule
  ],
  declarations: [DemoAlertsNotificationsComponent, DemoToastComponent, DemoToastContentsDirective, DemoToastActionsDirective],
  exports: [DemoAlertsNotificationsComponent, DemoToastComponent, DemoToastContentsDirective, DemoToastActionsDirective]
})
export class DemoAlertsNotificationsModule { }
