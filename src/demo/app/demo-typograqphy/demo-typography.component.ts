import {Component, OnDestroy, OnInit} from '@angular/core';
import {CBPToolbarState, CBPToolbarStateChange} from '../../../app/header/cbp-toolbar/cbp-toolbar-state.service';
import 'rxjs/add/operator/debounceTime';
import {Subscription} from 'rxjs/Subscription';
@Component({
    selector: 'cbp-demo-typography, demo-typography',
    moduleId: module.id,
    templateUrl: './demo-typography.component.html',
    styleUrls: ['./demo-typography.component.scss']
})
export class DemoTypographyComponent implements OnInit, OnDestroy {

    demoToolbarState: CBPToolbarState;
    private subscriptions: Subscription[] = [];

    constructor(private toolbarStateChange: CBPToolbarStateChange) {}

    ngOnInit() {
        this.subscriptions.push(this.toolbarStateChange.debounceTime(100).subscribe((state: CBPToolbarState) => {
            this.demoToolbarState = state;
            console.log('demo toolbar state ', state);
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach( subscription => subscription.unsubscribe());
    }

}
