import {TemplateRef} from '@angular/core';
import {Portal} from '@angular/cdk/portal';
import {BehaviorSubject, Observable} from 'rxjs';

let notificationCounter = 0;

export class CBPNotification {


  private _isOpen$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isOpen$: Observable<boolean> = this._isOpen$.asObservable();
  private readonly _id: number;
  private _onCloseHandlers: any[] = [];

  get id() {
    return this._id;
  }

  public type?: 'success' | 'danger' | 'warning' | 'info';
  public message?: string;
  public content?: TemplateRef<any>;
  public contentPortal?: Portal<any>;
  public autoClose = false;
  public autoCloseInMilliSec = 5000;

  /**
   * Creates notification
   */
  constructor(options: {
    isClosedInitially?: boolean,
    type?: 'success' | 'danger' | 'warning' | 'info',
    message?: string,
    content?: TemplateRef<any>,
    contentPortal?: Portal<any>,
    autoClose?: boolean;
    autoCloseInMilliSec?: number
  }) {
    this.type = options.type;
    this.message = options.message;
    this.content = options.content;
    this.contentPortal = options.contentPortal;
    this.autoClose = !!options.autoClose;
    this.autoCloseInMilliSec = options.autoCloseInMilliSec;
    this._id = ++notificationCounter;
    this._isOpen$.next(options.isClosedInitially);
  }

  /**
   * Is the notification currently open ?
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
    this._onCloseHandlers.forEach((h, index) => {
      if (h) {
        this._onCloseHandlers.splice(index, 1);
        try {
          h();
        } catch (err) {
          console.log(err);
        }
      }
    });
  }

  /**
   * OnClose handler
   */
  onClose(handler: () => any): CBPNotification {
    if (this._onCloseHandlers.indexOf(handler) < 0) {
      this._onCloseHandlers.push(handler);
    }
    return this;
  }

}
