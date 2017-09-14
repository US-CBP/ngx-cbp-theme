import {
    Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output,
    ViewEncapsulation
} from '@angular/core';
import {CBPScrollShrinkAnimator} from './cbp-scrollshrink';


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


    @Output() cbpToolbarState: String;
    private lastScrollY: number;

    @Input() position: number;
    @HostBinding('attr.role') role = 'toolbar';

    @Output() toolbarExpanded: EventEmitter<any> = new EventEmitter();
    @Output() toolbarCollapsed: EventEmitter<any> = new EventEmitter();

    private _isToolbarExpanded = false;
    set isToolbarExpanded(expanded: boolean){
        this._isToolbarExpanded = expanded;
        if (expanded) {
            this.toolbarExpanded.emit(null);
        } else {
            this.toolbarCollapsed.emit(null)
        }
    };
    get isToolbarExpanded(){ return this._isToolbarExpanded};

    constructor() {}

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
