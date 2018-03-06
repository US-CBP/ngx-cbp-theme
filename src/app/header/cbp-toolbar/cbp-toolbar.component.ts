import {
    Component, EventEmitter, HostBinding, HostListener, Input, OnDestroy, OnInit, Output,
    ViewEncapsulation
} from '@angular/core';
import {CBPScrollShrinkAnimator} from './cbp-scrollshrink';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {Subscription} from 'rxjs/Subscription';
import {fadeInContent} from '@angular/material';
import {CBPToolbarState, CBPToolbarStateChange} from './cbp-toolbar-state.service';

@Component({
    moduleId: module.id,
    selector: 'cbp-toolbar',
    templateUrl: './cbp-toolbar.component.html',
    styleUrls: ['./cbp-toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        CBPScrollShrinkAnimator.createScrollShrinkTrigger('cbpToolbarScrollState', '*', '-50px'),
        fadeInContent
    ]
})
export class CBPToolbarComponent implements OnInit, OnDestroy {


    @Output() cbpToolbarScrollState: 'up' | 'initial';
    private lastScrollY: number;

    private mediaSubscription: Subscription;


    @Input() position: number;
    @HostBinding('attr.role') role = 'toolbar';

    @Output() hideToolbarItem: EventEmitter<any> = new EventEmitter();

    private toolbarState = new CBPToolbarState();

    set isToolbarExpanded(expanded: boolean) {
        this.toolbarState.toolbarIsExpanded = expanded;
        this.toolbarStateChange.next(this.toolbarState);
    }
    get isToolbarExpanded(): boolean { return this.toolbarState.toolbarIsExpanded}

    set hasToolbarMenu(has: boolean) {
        this.toolbarState.hasToolbarMenu = has;
        this.toolbarStateChange.next(this.toolbarState);
    }
    get hasToolbarMenu(): boolean { return this.toolbarState.hasToolbarMenu}

    constructor(private media: ObservableMedia, private toolbarStateChange: CBPToolbarStateChange) {}

    ngOnInit() {
        this.cbpToolbarScrollState = 'initial';
        this.lastScrollY = 0;
        this.mediaSubscription = this.media.subscribe(
            (change: MediaChange) => {
                if ( change.mqAlias !== 'xs') {
                    this.isToolbarExpanded = false;
                    this.hasToolbarMenu = false;
                } else {
                    this.hasToolbarMenu = true;
                }
                this.toolbarStateChange.next(this.toolbarState);
            }
        );
    }

    ngOnDestroy() {
        this.mediaSubscription.unsubscribe();
    }

    @HostListener('window:scroll', ['$event'])
    scrolled() {
        this.cbpToolbarScrollState = this.lastScrollY > window.pageYOffset ? 'initial' : 'up';
        this.lastScrollY = window.pageYOffset;
        this.toolbarState.scrollState = this.cbpToolbarScrollState;
        this.isToolbarExpanded = false;
    }
}
