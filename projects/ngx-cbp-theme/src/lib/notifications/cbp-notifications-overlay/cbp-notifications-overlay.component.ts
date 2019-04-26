import {ChangeDetectionStrategy, Component, OnInit, ViewContainerRef} from '@angular/core';
import {CBPNotification} from '../cbp-notification';
import {CBPNotificationsService} from '../cbp-notifications.service';
import {Observable} from 'rxjs';
import {TemplatePortal} from '@angular/cdk/portal';
import {map} from 'rxjs/operators';

@Component({
  selector: 'cbp-notifications-overlay',
  templateUrl: './cbp-notifications-overlay.component.html',
  styleUrls: ['./cbp-notifications-overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CBPNotificationsOverlayComponent implements OnInit {

  notifications: CBPNotification[] = [];
  notifications$: Observable<CBPNotification[]>;

  constructor(private notificationsService: CBPNotificationsService,
              private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.notifications$ = this.notificationsService.getNotifications().pipe(
      map(notification => {
        if (notification.content && !notification.contentPortal) {
          notification.contentPortal = new TemplatePortal(notification.content, this.viewContainerRef);
        }
        this.notifications.push(notification);
        return this.notifications;
      })
    );
  }

  onClose(closed: CBPNotification) {
    closed.close();
    const index = this.notifications.indexOf(closed);
    this.notifications.splice(index, 1);
  }
}
