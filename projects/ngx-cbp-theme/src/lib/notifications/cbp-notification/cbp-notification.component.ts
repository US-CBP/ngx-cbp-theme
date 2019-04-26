import {EMPTY, Subscription} from 'rxjs';

import {delay} from 'rxjs/operators';
import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {animate, AnimationBuilder, AnimationFactory, AnimationPlayer, query, style, transition, trigger} from '@angular/animations';
import {CBPNotification} from '../cbp-notification';


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
  autoClosePlayer: AnimationPlayer;
  private _subscriptions = new Subscription();

  @Output() close = new EventEmitter<CBPNotification>();


  constructor(private animationBuilder: AnimationBuilder,
              private elementRef: ElementRef) {
  }


  ngOnInit() {
    if (!this.notification) {
      this.notification = new CBPNotification({isClosedInitially: this.autoShow});
      if (!this.notification.message) {
        this.notification.message = this.message;
      }
      if (!this.notification.type) {
        this.notification.type = this.type;
      }
    } else if (!this.notification.open) {
      throw new Error('Must be an instance of CBPNotification');
    }

    this._subscriptions.add(this.notification.isOpen$.subscribe(state => {
      if (state) {
        this.activate();
      } else {
        this.remove();
      }
    }));
  }

  startAutoClose() {
    if (this.notification.autoClose) {
      const autoCloseAnimation: AnimationFactory = this.animationBuilder.build(
        query('.toast-color', [
          animate(`${this.notification.autoCloseInMilliSec}ms linear`,
            style({
              transform: 'scaleY(0)',
            }))
        ], { optional: true })
      );
      this.autoClosePlayer = autoCloseAnimation.create(this.elementRef.nativeElement);
      this.autoClosePlayer.onDone(() => this.notification.close());
      this.autoClosePlayer.play();
    }
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    if (this.autoClosePlayer) {
      this.autoClosePlayer.destroy();
    }
  }

  activate() {
    this.show = true;
    this.animationState = 'enter';
  }

  dismiss() {
    this.show = false;
    this.animationState = 'leave';
  }

  remove(userTriggered?: boolean) {
    this.dismiss();
    if (userTriggered) {
      this.notification.close();
    }
    EMPTY.pipe(delay(300)).subscribe(null, null, () => {
      this.close.emit(this.notification);
    });
  }

}
