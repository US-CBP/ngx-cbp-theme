
import {EMPTY, ReplaySubject, Observable} from 'rxjs';

import {delay} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {CBPNotification} from './cbp-notification';

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
     * @param CBPNotification notification
     */
    notify(notification: CBPNotification) {
        notification.open();
        this._notifications$.next(notification);
    }

    /**
     * Snoozes a notification
     * @param CBPNotification notification
     * @param number wakeUpAfter
     */
    snooze(notification: CBPNotification, wakeUpAfter = 5000) {
        notification.close();
        EMPTY.pipe(delay(wakeUpAfter)).subscribe( null, null, () => {
            this.notify(notification);
        });
    }
}
