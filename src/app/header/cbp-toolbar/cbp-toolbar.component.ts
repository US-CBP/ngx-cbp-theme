import {
    Component, EventEmitter, HostBinding, HostListener, Input, OnDestroy, OnInit, Output, QueryList, ViewChildren,
    ViewEncapsulation
} from '@angular/core';
import {CBPScrollShrinkAnimator} from './cbp-scrollshrink';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {Subscription} from 'rxjs/Subscription';
import {fadeInContent} from '@angular/material';
import {CBPToolbarState, CBPToolbarStateChange} from './cbp-toolbar-expanded';

@Component({
    moduleId: module.id,
    selector: 'cbp-toolbar',
    templateUrl: './cbp-toolbar.component.html',
    styleUrls: ['./cbp-toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        CBPScrollShrinkAnimator.createScrollShrinkTrigger('cbpToolbarScrollState', '*', '-50px'),
        fadeInContent
    ],
    providers: [CBPToolbarStateChange]
})
export class CBPToolbarComponent implements OnInit, OnDestroy {


    @Output() cbpToolbarScrollState: String;
    private lastScrollY: number;

    private mediaSubscription: Subscription;


    @Input() position: number;
    @HostBinding('attr.role') role = 'toolbar';

    @Output() toolbarExpanded: EventEmitter<any> = new EventEmitter();
    @Output() toolbarCollapsed: EventEmitter<any> = new EventEmitter();
    @Output() hideToolbarItem: EventEmitter<any> = new EventEmitter();

    private toolbarState = new CBPToolbarState();

    set isToolbarExpanded(expanded: boolean) {
        this.toolbarState.toolbarIsExpanded = expanded;
        if (expanded) {
            this.toolbarExpanded.emit(null);
        } else {
            this.toolbarCollapsed.emit(null)
        }
    };
    get isToolbarExpanded(): boolean { return this.toolbarState.toolbarIsExpanded};

    constructor(private media: ObservableMedia, private toolbarStateChange: CBPToolbarStateChange) {}

    ngOnInit() {
        this.cbpToolbarScrollState = 'initial';
        this.lastScrollY = 0;
        this.mediaSubscription = this.media.subscribe(
            (change: MediaChange) => {
                if ( change.mqAlias !== 'xs') {
                    this.isToolbarExpanded = false;
                    this.toolbarState.hasToolbarMenu = false;
                } else {
                    this.toolbarState.hasToolbarMenu = true;
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
        this.isToolbarExpanded = false;
    }
}
