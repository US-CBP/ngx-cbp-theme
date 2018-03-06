import {Component, Output, OnInit, OnDestroy} from '@angular/core';
import {CBPScrollShrinkAnimator} from '../cbp-toolbar/cbp-scrollshrink';
import {CBPToolbarState, CBPToolbarStateChange} from '../cbp-toolbar/cbp-toolbar-state.service';
import {Subscription} from 'rxjs/Subscription';


@Component({
    selector: 'cbp-app-header',
    moduleId: module.id,
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss'],
    animations: [
        CBPScrollShrinkAnimator.createScrollShrinkTrigger('appHeaderState', '50px', '0')
    ]
})
export class CBPAppHeaderComponent implements OnInit , OnDestroy {

    @Output() appHeaderState: String;
    toolbarState: CBPToolbarState;
    private subscriptions: Subscription[] = [];

    constructor(private toolbarStateChange: CBPToolbarStateChange) {}

    ngOnInit() {
        this.appHeaderState = 'initial';
        this.subscriptions.push(this.toolbarStateChange.subscribe((state: CBPToolbarState) => {
            this.toolbarState = state;
            this.appHeaderState = this.toolbarState.scrollState ? this.toolbarState.scrollState : 'initial';
        }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach( subscription => subscription.unsubscribe());
    }

}


