import {EMPTY, Subscription} from 'rxjs';

import {delay, filter, first} from 'rxjs/operators';
import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CBPNotification, CBPNotificationsService} from 'ngx-cbp-theme';

@Component({
  selector: 'demo-notifications, cbp-demo-notifications',
  templateUrl: './demo-notifications.component.html',
  styleUrls: ['./demo-notifications.component.scss']
})
export class DemoNotificationsComponent implements OnInit, OnDestroy {

  @ViewChild('successNotification') successContentRef: TemplateRef<any>;
  @ViewChild('infoNotification') infoNotificationRef: TemplateRef<any>;
  @ViewChild('warnNotification') warnNotificationRef: TemplateRef<any>;
  @ViewChild('dangerNotification') dangerNotificationRef: TemplateRef<any>;

  private snoozingNotification: CBPNotification;
  private connectionLostNotification: CBPNotification;
  dangerShow = true;
  private snoozerNotifClosingSubscription = new Subscription();


  constructor(private notificationService: CBPNotificationsService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.snoozerNotifClosingSubscription.unsubscribe();
  }

  notifyMe(message: string) {
    const notification = new CBPNotification();
    notification.type = 'success';
    notification.message = message;
    this.notificationService.notify(notification);
  }

  notifyInfo() {
    const notification = new CBPNotification();
    notification.type = 'info';
    notification.content = this.infoNotificationRef;
    this.notificationService.notify(notification);
    notification.onClose(() => {
      console.log('info closed');
    });

  }

  /**
   * Example of snoozing notification.
   * Also an example to listening to user closing the notification.
   */
  notifyWarning() {
    this.snoozingNotification = new CBPNotification();
    this.snoozingNotification.type = 'warning';
    this.snoozingNotification.content = this.warnNotificationRef;
    this.notificationService.notify(this.snoozingNotification);
    this.snoozerNotifClosingSubscription.add(
      this.snoozingNotification.isOpen$.pipe(
        filter((open: boolean) => open === false),
        first(),
        delay(600))
        .subscribe(() => {
          this.notifyMe('You just closed Snoozer Notification');
        }));
  }

  notifyDanger() {
    this.connectionLostNotification = new CBPNotification();
    this.connectionLostNotification.type = 'danger';
    this.connectionLostNotification.content = this.dangerNotificationRef;
    this.notificationService.notify(this.connectionLostNotification);
  }

  /**
   * Actions on notifications
   */
  viewComment() {
    this.notifyMe('Comment Viewed');
    console.log('Comment Viewed');
  }

  /**
   * Example of snoozing action.
   * @param {number} snoozeFor
   */
  snoozeSnoozing(snoozeFor: number) {
    if (this.snoozingNotification) {
      this.notificationService.snooze(this.snoozingNotification, snoozeFor);
    }
  }

  /**
   * Various ways to interact with notification.
   */
  retryAndClose() {
    this.notifyMe('Connection Successful!');
    EMPTY.pipe(delay(2000)).subscribe(null, null, () => {
      if (this.connectionLostNotification) {
        this.connectionLostNotification.close();
      } else {
        this.dangerShow = false;
      }
    });
  }

  /**
   * Actions on notifications
   */
  caseViewed() {
    this.notifyMe('Case #165799-96 viewed.');
  }
}
