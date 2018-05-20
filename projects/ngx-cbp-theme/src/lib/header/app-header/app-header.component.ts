import {Component, Inject, OnDestroy, OnInit, Output} from '@angular/core';
import {CBPScrollShrinkAnimator} from '../cbp-toolbar/cbp-scrollshrink-animator';
import {APP_HEADER_STATE, CBPToolbarState} from '../cbp-toolbar/cbp-toolbar-state';
import {Subscription} from 'rxjs/Subscription';


@Component({
    selector: 'cbp-app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss'],
    animations: [
        CBPScrollShrinkAnimator.createScrollShrinkTrigger('appHeaderState', '50px', '0')
    ]
})
export class CBPAppHeaderComponent implements OnInit, OnDestroy {

    @Output() appHeaderState: String;
    private subscriptions: Subscription[] = [];

    constructor(@Inject(APP_HEADER_STATE) public toolbarState: CBPToolbarState) {
    }

    ngOnInit() {
        this.appHeaderState = 'initial';
        this.subscriptions.push(this.toolbarState.scrollState.subscribe((state) => {
            this.appHeaderState = state ? state : 'initial';
        }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

}
