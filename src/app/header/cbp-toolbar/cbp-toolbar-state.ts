import 'rxjs/add/operator/debounceTime';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {InjectionToken} from '@angular/core';


export const CBP_HEADER_STATE = new InjectionToken<CBPToolbarState>('cbp-toolbar-state-service');
export const APP_HEADER_STATE = new InjectionToken<CBPToolbarState>('app-toolbar-state-service');

/**
 * Holds a single notification state as well as serves as a observable.
 */
export class CBPToolbarState {
    hasToolbarMenu = new BehaviorSubject<boolean>(false);
    toolbarIsExpanded = new BehaviorSubject<boolean>(false);
    scrollState = new BehaviorSubject<'up' | 'initial'>('initial');

    private _scrollShrinkSuspended = false;
    get scrollShrinkSuspended() {
        return this._scrollShrinkSuspended;
    }

    set scrollShrinkSuspended(suspended: boolean) {
        this._scrollShrinkSuspended = suspended;
    }

    constructor() {};
}


