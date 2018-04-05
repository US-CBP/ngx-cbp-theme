import {Injectable} from '@angular/core';
import {CBPNotification} from './cbp-notification';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CBPNotificationsService {

    private _notifications$ = new ReplaySubject<CBPNotification>(1);

    constructor() {
    }

    getNotifications(): Observable<CBPNotification> {
        return this._notifications$.asObservable();
    }

    notify(notification: CBPNotification) {
        this._notifications$.next(notification)
    }

}
