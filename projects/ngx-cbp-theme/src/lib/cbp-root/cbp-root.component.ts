import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'cbp-root',
  templateUrl: './cbp-root.component.html',
  styleUrls: ['./cbp-root.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CBPRootComponent implements OnInit {
  constructor() { }
  @HostBinding('class.cbp-theme')
  ngOnInit() {
  }
}
