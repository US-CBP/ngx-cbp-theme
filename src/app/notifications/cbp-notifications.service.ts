import {Injectable} from '@angular/core';
import {CBPNotification} from './cbp-notification';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/delay';


@Injectable()
export class CBPNotificationsService {

    private _notifications$ = new ReplaySubject<CBPNotification>(3);

    constructor() {
    }

    getNotifications(): Observable<CBPNotification> {
        return this._notifications$.asObservable();
    }

    /**
     * Adds and opens a notification.
     * @param {CBPNotification} notification
     */
    notify(notification: CBPNotification) {
        notification.open();
        this._notifications$.next(notification);
    }

    /**
     * Snoozes a notification
     * @param {CBPNotification} notification
     * @param {number} wakeUpAfter
     */
    snooze(notification: CBPNotification, wakeUpAfter = 5000) {
        notification.close();
        Observable.empty().delay(wakeUpAfter).subscribe( null, null, () => {
            this.notify(notification);
        });
    }
}
