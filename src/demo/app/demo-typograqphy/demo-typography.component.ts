import {Component, OnInit} from '@angular/core';
import {CBPToolbarState, CBPToolbarStateChange} from '../../../app/header/cbp-toolbar/cbp-toolbar-state.service';
import 'rxjs/add/operator/debounceTime';
@Component({
    selector: 'cbp-demo-typography, demo-typography',
    moduleId: module.id,
    templateUrl: './demo-typography.component.html',
    styleUrls: ['./demo-typography.component.scss']
})
export class DemoTypographyComponent implements OnInit {

    demoToolbarState: CBPToolbarState;

    constructor(private toolbarStateChange: CBPToolbarStateChange) {}

    ngOnInit() {
        this.toolbarStateChange.debounceTime(100).subscribe((state: CBPToolbarState) => {
            this.demoToolbarState = state;
            console.log('demo toolbar state ', state);
        })
    }

}
