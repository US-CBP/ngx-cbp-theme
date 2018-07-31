import {TemplateRef} from '@angular/core';
import {Portal} from '@angular/cdk/portal';
import {BehaviorSubject, Observable} from 'rxjs';

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
  isOpen$: Observable<boolean> = this._isOpen$.asObservable();
  private _id: number;
  private _onCloseHandlers: any[] = [];

  get id() {
    return this._id;
  }

  constructor(isClosedInitially = false) {
    this._id = ++notificationCounter;
    this._isOpen$.next(isClosedInitially);
  }


  /**
   * Is the notification currently open ?
   * @returns
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
