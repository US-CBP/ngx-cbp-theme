import {Component, HostListener, Output, OnInit, HostBinding} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { HEADER_SHRINK_TRANSITION } from '../cbp-header/cbp-header.component';


@Component({
  selector: 'cbp-app-header',
  moduleId: module.id,
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  animations: [
    trigger('appHeaderState', [
      state('initial', style({top: '50px'})),
      state('up', style({top: '0'})),
      transition('initial => up, up => initial',
        animate(HEADER_SHRINK_TRANSITION))
    ])
  ]
})
export class CBPAppHeaderComponent implements OnInit {

  @Output() appHeaderState: String;
  private lastScrollY: number;
  public isToolbarExpanded: boolean;

  constructor() { }

  ngOnInit() {
    this.appHeaderState = 'initial';
    this.lastScrollY = 0;
  }
  @HostListener('window:scroll', ['$event'])
  scrolled() {
    this.appHeaderState = this.lastScrollY  > window.pageYOffset ? 'initial' : 'up';
    this.lastScrollY  = window.pageYOffset;
  }



}


