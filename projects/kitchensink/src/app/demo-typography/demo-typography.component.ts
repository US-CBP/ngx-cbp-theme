import { debounceTime } from 'rxjs/operators';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { APP_HEADER_STATE, CBPToolbarState } from 'ngx-cbp-theme';

import { Subscription } from 'rxjs';

@Component({
  selector: 'cbp-demo-typography, demo-typography',
  templateUrl: './demo-typography.component.html',
  styleUrls: ['./demo-typography.component.scss']
})
export class DemoTypographyComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  scrollState: any = null;

  constructor(@Inject(APP_HEADER_STATE) public toolbarState: CBPToolbarState) {
  }

  ngOnInit() {
    this.subscriptions.push(this.toolbarState.scrollState.pipe(debounceTime(100)).subscribe((state: any) => {
      this.scrollState = state;
      console.log('demo toolbar state ', state);
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
