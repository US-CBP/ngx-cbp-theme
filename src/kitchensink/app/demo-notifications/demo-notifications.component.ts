import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CBPNotification} from '../../../app/notifications/cbp-notification';
import {CBPNotificationsService} from '../../../app/notifications/cbp-notifications.service';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/delay';
import {Observable} from 'rxjs/Observable';
@Component({
    selector: 'demo-notifications, cbp-demo-notifications',
    templateUrl: './demo-notifications.component.html',
    styleUrls: ['./demo-notifications.component.scss']
})
export class DemoNotificationsComponent implements OnInit {

    @ViewChild('successNotification') successContentRef: TemplateRef<any>;
    @ViewChild('infoNotification') infoNotificationRef: TemplateRef<any>;
    @ViewChild('warnNotification') warnNotificationRef: TemplateRef<any>;
    @ViewChild('dangerNotification') dangerNotificationRef: TemplateRef<any>;

    private snoozingNotification: CBPNotification;
    private connectionLostNotification: CBPNotification;
    dangerShow = true;

    constructor(private notificationService: CBPNotificationsService) {
    }

    ngOnInit() {
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

    }

    notifyWarning() {
        this.snoozingNotification = new CBPNotification();
        this.snoozingNotification.type = 'warning';
        this.snoozingNotification.content = this.warnNotificationRef;
        this.notificationService.notify(this.snoozingNotification);
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
        Observable.empty().delay(2000).subscribe( null, null, () => {
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