import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, Output} from '@angular/core';
import {CBPScrollShrinkAnimator} from '../cbp-toolbar/cbp-scrollshrink-animator';
import {APP_HEADER_STATE, CBPToolbarState} from '../cbp-toolbar/cbp-toolbar-state';
import {Subscription} from 'rxjs';


@Component({
  selector: 'cbp-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    CBPScrollShrinkAnimator.createScrollShrinkTrigger('appHeaderState', '50px', '0')
  ]
})
export class CBPAppHeaderComponent implements OnInit, OnDestroy {

  @Output() appHeaderState: String;
  private subscriptions = new Subscription();

  constructor(@Inject(APP_HEADER_STATE) public toolbarState: CBPToolbarState,
              private _cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.appHeaderState = 'initial';
    this.subscriptions.add(this.toolbarState.scrollState.subscribe((state) => {
      this.appHeaderState = state ? state : 'initial';
      this._cdr.markForCheck();
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
