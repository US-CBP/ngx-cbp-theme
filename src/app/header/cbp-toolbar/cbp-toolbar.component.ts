import {Component, HostBinding, HostListener, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

export const HEADER_SHRINK_TRANSITION = '250ms cubic-bezier(0.4,0.0,0.2,1)';
export const TOOLBAR_HEIGHT = 50;

@Component({
    moduleId: module.id,
    selector: 'cbp-toolbar',
    templateUrl: './cbp-toolbar.component.html',
    styleUrls: ['./cbp-toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('cbpToolbarState', [
            state('initial', style({top: '0'})),
            state('up', style({top: '-50px'})),
            transition('initial => up, up => initial',
                animate(HEADER_SHRINK_TRANSITION))
        ])
    ]
})
export class CBPToolbarComponent implements OnInit {

    isToolbarExpanded: boolean;
    @Output() cbpToolbarState: String;
    private lastScrollY: number;

    @Input() position: number;
    @HostBinding('attr.class') class = 'cbp-toolbar';

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
