import {Component, HostBinding, HostListener, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {CBPScrollShrinkAnimator} from './cbp-scrollshrink';

export const HEADER_SHRINK_TRANSITION = '250ms cubic-bezier(0.4,0.0,0.2,1)';
export const TOOLBAR_HEIGHT = 50;

@Component({
    moduleId: module.id,
    selector: 'cbp-toolbar',
    templateUrl: './cbp-toolbar.component.html',
    styleUrls: ['./cbp-toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        CBPScrollShrinkAnimator.createScrollShrinkTrigger('cbpToolbarState', '*', '-50px')
    ]
})
export class CBPToolbarComponent implements OnInit {

    isToolbarExpanded: boolean;
    @Output() cbpToolbarState: String;
    private lastScrollY: number;

    @Input() position: number;
    // @HostBinding('attr.class') class = 'cbp-toolbar';
    @HostBinding('attr.role') role = 'toolbar';

    constructor() {
    }

    ngOnInit() {
        this.cbpToolbarState = 'initial';
        this.lastScrollY = 0;
    }

    @HostListener('window:scroll', ['$event'])
    scrolled() {
        this.cbpToolbarState = this.lastScrollY > window.pageYOffset ? 'initial' : 'up';
        this.lastScrollY = window.pageYOffset;
        this.isToolbarExpanded = false;
    }
}
