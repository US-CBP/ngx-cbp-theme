import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';


@Injectable()
export class CBPToolbarStateChange extends ReplaySubject<CBPToolbarState> {
    constructor() {
        super();
    };
}

export class CBPToolbarState {
    hasToolbarMenu: boolean;
    toolbarIsExpanded: boolean;
}
