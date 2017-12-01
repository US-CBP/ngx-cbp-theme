import {Component, HostListener, Output, OnInit} from '@angular/core';
import {CBPScrollShrinkAnimator} from '../cbp-toolbar/cbp-scrollshrink';


@Component({
  selector: 'cbp-app-header',
  moduleId: module.id,
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  animations: [
      CBPScrollShrinkAnimator.createScrollShrinkTrigger('appHeaderState', '50px', '0')
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


