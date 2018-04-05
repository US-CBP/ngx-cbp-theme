import {
    Component, ContentChild, Directive, EventEmitter, HostBinding, Input, OnInit, Output,
    ViewEncapsulation
} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {CBPNotification} from '../cbp-notification';
import {Portal, TemplatePortal} from '@angular/cdk/portal';

@Directive({selector: '[cbpNotificationContent], .cbp-notification-contents'})
export class CBPNotificationContentsDirective {
    @HostBinding('class') thisClass = 'toast-content';
    constructor() {
    }
}

@Directive({selector: '[cbpNotificationActions]'})
export class CBPNotificationActionsDirective {
    constructor() {
    }
}

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
export class CBPNotificationComponent implements OnInit {
    @Input() notification: CBPNotification;
    @Input() delay = 100;
    animationState: any;


    @Output() close = new EventEmitter<any>();
    @ContentChild(CBPNotificationContentsDirective) toastContents: CBPNotificationContentsDirective;
    @ContentChild(CBPNotificationActionsDirective) toastActions: CBPNotificationActionsDirective;


    private show = false;

    constructor() {
    }

    get toastTypeClass() {
        return `toast-${this.notification.type}`;
    }

    ngOnInit() {
        if (this.delay > 0) {
            setTimeout(() => {
                this.activate();
            }, this.delay);
        } else {
            this.show = true;
        }
    }


    activate() {
        this.show = true;
        this.animationState = 'enter'
    }

    hide() {
        this.show = false;
        this.animationState = 'leave';
        this.close.emit(true);
    }

}
