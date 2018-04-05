import {Component, ContentChild, Directive, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Directive({ selector: '[demoDemoToastContents], [cbpDemoDemoToastContents]'})
export class DemoToastContentsDirective { constructor() { }}

@Directive({ selector: '[demoDemoToastActions], [cbpDemoDemoToastActions]'})
export class DemoToastActionsDirective { constructor() { }}


@Component({
    selector: 'demo-toast, cbp-demo-toast',
    templateUrl: './demo-toast.component.html',
    styleUrls: ['./demo-toast.component.scss'],
    animations: [
        // trigger(
        //     'enterAnimation', [
        //         transition(':enter', [
        //             style({transform: 'translateX(100%)', opacity: 0}),
        //             animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        //         ]),
        //         transition(':leave', [
        //             style({transform: 'translateX(0)', opacity: 1}),
        //             animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        //         ])
        //     ]
        // )

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
export class DemoToastComponent implements OnInit {

    @Input() type: 'success' | 'danger' | 'warn' | 'info' = 'info';

    @Input() delay = 2000;
    animationState: any;

    @ContentChild(DemoToastContentsDirective) toastContents: DemoToastContentsDirective;
    @ContentChild(DemoToastActionsDirective) toastActions: DemoToastActionsDirective;


    private show = false;

    constructor() {
    }

    get toastTypeClass() {
        return `toast-${this.type}`;
    }

    ngOnInit() {
        if (this.delay > 0) {
            setTimeout(() => {
                this.showToast();
            }, this.delay);
        } else {
            this.show = true;
        }
    }


    showToast() {
        this.show = true;
        this.animationState = 'enter'
    }

    hideToast() {
        this.show = false;
        this.animationState = 'leave'
    }

}

