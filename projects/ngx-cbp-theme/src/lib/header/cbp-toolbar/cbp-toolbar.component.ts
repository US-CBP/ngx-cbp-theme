import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { CBPScrollShrinkAnimator } from './cbp-scrollshrink-animator';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { matSelectAnimations } from '@angular/material';
import { CBPToolbarState } from './cbp-toolbar-state';

@Component({
  selector: 'cbp-toolbar',
  templateUrl: './cbp-toolbar.component.html',
  styleUrls: ['./cbp-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    CBPScrollShrinkAnimator.createScrollShrinkTrigger('cbpToolbarScrollState', '*', '-50px'),
    matSelectAnimations.fadeInContent
  ],
  exportAs: 'cbpToolbar'
})
export class CBPToolbarComponent implements OnInit, OnDestroy {


  @Output() cbpToolbarScrollState: 'up' | 'initial';

  private _subscription = new Subscription();


  @Input() position: number;
  @HostBinding('attr.role') role = 'toolbar';

  @Input() toolbarState: CBPToolbarState;
  @Output() hideToolbarItem: EventEmitter<any> = new EventEmitter();


  set isToolbarExpanded(expanded: boolean) {
    this.toolbarState.toolbarIsExpanded.next(expanded);
  }

  get isToolbarExpanded(): boolean {
    return this.toolbarState.toolbarIsExpanded.getValue();
  }

  set hasToolbarMenu(has: boolean) {
    this.toolbarState.hasToolbarMenu.next(has);
  }

  constructor(private mediaObserver: MediaObserver,
              private _cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.cbpToolbarScrollState = 'initial';
    this._subscription.add(this.mediaObserver.asObservable().subscribe(
      () => {
        if (!this.mediaObserver.isActive('xs')) {
          this.isToolbarExpanded = false;
          this.hasToolbarMenu = false;
        } else {
          this.hasToolbarMenu = true;
        }
        this._cdr.markForCheck();
      }
    ));
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  @HostListener('window:scroll', ['$event'])
  scrolled($event: any) {
    if (!this.toolbarState.scrollShrinkSuspended) {
      this.cbpToolbarScrollState = window.pageYOffset <= 50 ? 'initial' : 'up';
      this.toolbarState.scrollState.next(this.cbpToolbarScrollState);
      this.isToolbarExpanded = false;
    }
  }

  getToolbarExpansionPanelTop(): string {
    return this.toolbarState.scrollState.getValue() === 'initial' ? '98px' : '50px';
  }
}
