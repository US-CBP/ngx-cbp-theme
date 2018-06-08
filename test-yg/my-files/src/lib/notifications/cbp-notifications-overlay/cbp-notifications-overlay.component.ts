import {Component, OnDestroy, OnInit} from '@angular/core';
import {CBPNotification} from '../cbp-notification';
import {CBPNotificationsService} from '../cbp-notifications.service';
import {Subscription} from 'rxjs';
import {TemplatePortal} from '@angular/cdk/portal';

@Component({
  selector: 'cbp-notifications-overlay',
  templateUrl: './cbp-notifications-overlay.component.html',
  styleUrls: ['./cbp-notifications-overlay.component.scss']
})
export class CBPNotificationsOverlayComponent implements OnInit, OnDestroy {

  notifications: CBPNotification[] = [];
  private _subscriptions = new Subscription();

  constructor(private notificationsService: CBPNotificationsService) { }

  ngOnInit() {
    this._subscriptions.add(this.notificationsService.getNotifications().subscribe( notification => {
      if (notification.content && !notification.contentPortal) {
          notification.contentPortal = new TemplatePortal(notification.content, null!);
      }
      this.notifications.push(notification);
    }));
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }
  onClose(closed: CBPNotification) {
    closed.close();
    const index = this.notifications.indexOf(closed);
    this.notifications.splice(index, 1);
  }
}
