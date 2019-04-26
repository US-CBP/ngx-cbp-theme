import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBPNotificationComponent } from './cbp-notification/cbp-notification.component';
import { CBPNotificationsOverlayComponent } from './cbp-notifications-overlay/cbp-notifications-overlay.component';
import { CBPNotificationsService } from './cbp-notifications.service';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, PortalModule, MatIconModule
  ],
  declarations: [CBPNotificationComponent, CBPNotificationsOverlayComponent],
  exports: [CBPNotificationComponent, CBPNotificationsOverlayComponent],
  providers: [CBPNotificationsService]
})
export class CBPNotificationsModule {
}
