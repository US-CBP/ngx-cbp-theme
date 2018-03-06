import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/debounceTime';

@Injectable()
export class CBPToolbarStateChange extends ReplaySubject<CBPToolbarState> {
    constructor() {
        super();
        this.debounceTime(100);
    };
}

export class CBPToolbarState {
    hasToolbarMenu: boolean;
    toolbarIsExpanded: boolean;
    scrollState: 'up' | 'initial'
}
