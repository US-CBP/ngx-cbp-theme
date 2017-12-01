import {
    Component, EventEmitter, HostBinding, HostListener, Input, OnDestroy, OnInit, Output,
    ViewEncapsulation
} from '@angular/core';
import {CBPScrollShrinkAnimator} from './cbp-scrollshrink';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {Subscription} from 'rxjs/Subscription';
import {fadeInContent} from '@angular/material';

@Component({
    moduleId: module.id,
    selector: 'cbp-toolbar',
    templateUrl: './cbp-toolbar.component.html',
    styleUrls: ['./cbp-toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        CBPScrollShrinkAnimator.createScrollShrinkTrigger('cbpToolbarState', '*', '-50px'),
        fadeInContent
    ]
})
export class CBPToolbarComponent implements OnInit, OnDestroy {


    @Output() cbpToolbarState: String;
    private lastScrollY: number;

    private mediaSubscription: Subscription;


    @Input() position: number;
    @HostBinding('attr.role') role = 'toolbar';

    @Output() toolbarExpanded: EventEmitter<any> = new EventEmitter();
    @Output() toolbarCollapsed: EventEmitter<any> = new EventEmitter();
    @Output() showToolbarItem: EventEmitter<any> = new EventEmitter();
    @Output() hideToolbarItem: EventEmitter<any> = new EventEmitter();

    private _isToolbarExpanded = false;
    set isToolbarExpanded(expanded: boolean) {
        this._isToolbarExpanded = expanded;
        if (expanded) {
            this.toolbarExpanded.emit(null);
        } else {
            this.toolbarCollapsed.emit(null)
        }
    };
    get isToolbarExpanded(): boolean { return this._isToolbarExpanded};

    private _showToolbarItems = false;
    get showToolbarItems(): boolean { return this._showToolbarItems};
    set showToolbarItems(show: boolean) {
        this._showToolbarItems = show;
        if (show) {
            this.showToolbarItem.emit(null);
        } else {
            this.hideToolbarItem.emit(null)
        }
    };

    constructor(private media: ObservableMedia) {}

    ngOnInit() {
        this.cbpToolbarState = 'initial';
        this.lastScrollY = 0;
        this.mediaSubscription = this.media.subscribe(
            (change: MediaChange) => {
                if ( change.mqAlias !== 'xs') {
                    this.isToolbarExpanded = false;
                    this.showToolbarItems = false;
                } else {
                    if (this.isToolbarExpanded) {
                        this.showToolbarItems = true;
                    } else {
                        this.showToolbarItems = false;
                    }

                }
            }
        );
    }

    ngOnDestroy() {
        this.mediaSubscription.unsubscribe();
    }

    @HostListener('window:scroll', ['$event'])
    scrolled() {
        this.cbpToolbarState = this.lastScrollY > window.pageYOffset ? 'initial' : 'up';
        this.lastScrollY = window.pageYOffset;
        this.isToolbarExpanded = false;
    }
}
