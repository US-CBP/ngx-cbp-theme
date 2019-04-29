import { of, Subscription } from 'rxjs';

import { delay, filter, first } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { CBPNotification, CBPNotificationsService } from 'ngx-cbp-theme';

@Component({
  selector: 'demo-notifications, cbp-demo-notifications',
  templateUrl: './demo-notifications.component.html',
  styleUrls: ['./demo-notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DemoNotificationsComponent implements OnDestroy {

  @ViewChild('successNotification') successContentRef: TemplateRef<any>;
  @ViewChild('infoNotification') infoNotificationRef: TemplateRef<any>;
  @ViewChild('warnNotification') warnNotificationRef: TemplateRef<any>;
  @ViewChild('dangerNotification') dangerNotificationRef: TemplateRef<any>;

  @ViewChild('block2') blockEl: ElementRef;
  private snoozingNotification: CBPNotification;
  private connectionLostNotification: CBPNotification;
  dangerShow = true;
  private snoozerNotifClosingSubscription = new Subscription();

  autoClose = true;
  autoCloseInSec = 3;

  constructor(private notificationService: CBPNotificationsService) {
  }

  ngOnDestroy() {
    this.snoozerNotifClosingSubscription.unsubscribe();
  }

  notifyMe(message: string, type: any = 'info') {
    const notification = new CBPNotification({type: type, message: message});
    this._notify(notification);
  }

  notifyInfo() {
    const notification = new CBPNotification({type: 'info', content: this.infoNotificationRef});
    this._notify(notification);
    notification.onClose(() => {
      console.log('info closed');
    });

  }

  /**
   * Example of snoozing notification.
   * Also an example to listening to user closing the notification.
   */
  notifyWarning() {
    this.snoozingNotification = new CBPNotification({type: 'warning', content: this.warnNotificationRef});
    this._notify(this.snoozingNotification);
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
    this.connectionLostNotification = new CBPNotification({type: 'danger', content: this.dangerNotificationRef});
    this._notify(this.connectionLostNotification);
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
    of(1).pipe(delay(2000)).subscribe(() => {
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

  _notify(notification: CBPNotification) {
    notification.autoClose = this.autoClose;
    notification.autoCloseInMilliSec = this.autoCloseInSec * 1000;
    this.notificationService.notify(notification);
  }
}
