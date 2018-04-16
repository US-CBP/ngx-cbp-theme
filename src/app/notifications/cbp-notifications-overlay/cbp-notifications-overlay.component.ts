import {Component, OnDestroy, OnInit} from '@angular/core';
import {CBPNotification} from '../cbp-notification';
import {CBPNotificationsService} from '../cbp-notifications.service';
import {Subscription} from 'rxjs/Subscription';
import {TemplatePortal} from '@angular/cdk/portal';

@Component({
  moduleId: module.id,
  selector: 'cbp-notifications-overlay',
  templateUrl: './cbp-notifications-overlay.component.html',
  styleUrls: ['./cbp-notifications-overlay.component.scss']
})
export class CBPNotificationsOverlayComponent implements OnInit, OnDestroy {

  notifications: CBPNotification[] = [];
  private _subscriptions: Subscription[] = [];

  constructor(private notificationsService: CBPNotificationsService) { }

  ngOnInit() {
    this.notificationsService.getNotifications().subscribe( notification => {
      if (notification.content && !notification.contentPortal) {
          notification.contentPortal = new TemplatePortal(notification.content, null!);
      }
      this.notifications.push(notification);
    });
  }

  ngOnDestroy() {
    this._subscriptions.forEach( sub => sub.unsubscribe());
  }
  onClose(closed: CBPNotification) {

    console.log('closed notification $event here', this.notifications.length);
    const index = this.notifications.indexOf(closed);
    this.notifications.splice(index, 1);
    console.log('closed notification $event here', this.notifications.length);
  }
}
