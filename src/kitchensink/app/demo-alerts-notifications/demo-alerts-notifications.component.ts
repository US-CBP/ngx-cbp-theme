import {Component, Directive, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'demo-alerts-notifications, cbp-demo-alerts-notifications',
  templateUrl: './demo-alerts-notifications.component.html',
  styleUrls: ['./demo-alerts-notifications.component.scss']
})
export class DemoAlertsNotificationsComponent implements OnInit {

  showing = false;
  constructor() { }

  ngOnInit() {
  }

  toggleToasts() {
      this.showing = ! this.showing;
  }
}

@Component({
    selector: 'demo-animated-toast, cbp-demo-animated-toast',
    animations: [
        trigger(
            'enterAnimation', [
                transition(':enter', [
                    style({transform: 'translateX(100%)', opacity: 0}),
                    animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
                ]),
                transition(':leave', [
                    style({transform: 'translateX(0)', opacity: 1}),
                    animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
                ])
            ]
        )
    ],
    template: `<div *ngIf="show" [@enterAnimation]><ng-content></ng-content></div>`
})
export class DemoAnimateToastComponent {
  private show = false;
  showToast() {
    this.show = true;
  }
  hideToast() {
      this.show = false;
  }
}