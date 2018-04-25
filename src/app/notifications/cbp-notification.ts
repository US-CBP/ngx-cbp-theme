import {TemplateRef} from '@angular/core';
import {Portal} from '@angular/cdk/portal';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';

import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/delay';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

let notificationCounter = 0;
export class CBPNotification {
    type?: 'success' | 'danger' | 'warning' | 'info';
    /**
     * For creating a simple test notification.
     */
    message?: string;

    /**
     * If you have your own markup and actionable notifications.
     */
    content?: TemplateRef<any>;

    /**
     * Mainly used internally but you can pass CdkPortal i.e. your own TemplatePortal or ComponentPortal
     */
    contentPortal?: Portal<any>;

    private _isOpen$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    isOpen$ = this._isOpen$.asObservable();
    private _id: number;
    get id() {
        return this._id;
    }

    constructor(isClosedInitially = false) {
        this._id = ++notificationCounter;
        this._isOpen$.next(isClosedInitially);
    }


    /**
     * Is the notification currently open ?
     * @returns {Observable<boolean>}
     */
    isOpen(): boolean {
        return this._isOpen$.getValue();
    }

    /**
     * Open the notification that is created.
     */
    open(): void {
        this._isOpen$.next(true);
    }

    /**
     * Close the notification. Meant for close and destroy.
     */
    close(): void {
        this._isOpen$.next(false);
    }


}
