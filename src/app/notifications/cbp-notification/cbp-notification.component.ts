import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {CBPNotification} from '../cbp-notification';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/delay';


@Component({
    selector: 'cbp-notification',
    templateUrl: './cbp-notification.component.html',
    styleUrls: ['./cbp-notification.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger(
            'animationState', [
                transition('* => enter', [
                    style({transform: 'translateX(100%)', opacity: 0}),
                    animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
                ]),
                transition('enter => *', [
                    style({transform: 'translateX(0)', opacity: 1}),
                    animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
                ])
            ]
        )
    ]
})
export class CBPNotificationComponent implements OnInit, OnDestroy {
    @Input() type?: 'success' | 'danger' | 'warning' | 'info' = 'info';
    @Input() message?: string;
    // OR
    @Input() notification: CBPNotification;

    @Input() autoShow = false;
    @Input() delay = 100;
    @Input() show = false;

    animationState: any;
    private _subscriptions: Subscription[] = [];


    @Output() close = new EventEmitter<CBPNotification>();


    constructor() {
    }

    get toastTypeClass() {
        return `toast-${this.notification.type}`;
    }

    ngOnInit() {
        if (!this.notification) {
            this.notification = new CBPNotification(this.autoShow);
            if (!this.notification.message) {
                this.notification.message = this.message;
            }
            if (!this.notification.type) {
                this.notification.type = this.type;
            }
        } else if (!this.notification.open) {
            throw new Error('Must be an instance of CBPNotification');
        }

        this._subscriptions.push(this.notification.isOpen().subscribe( state => {
            if (state) {
                this.activate();
            } else {
                this.remove();
            }
        }));
    }

    ngOnDestroy() {
        this._subscriptions.forEach(sub => sub.unsubscribe());
    }

    activate() {
        this.show = true;
        this.animationState = 'enter'
    }

    dismiss() {
        this.show = false;
        this.animationState = 'leave';
    }
    remove() {
        this.dismiss();
        Observable.empty().delay(300).subscribe( null, null, () => {
            this.close.emit(this.notification);
        });
    }

}
