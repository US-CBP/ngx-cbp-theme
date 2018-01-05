import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';

let toggleSwitchCounter = 1;


@Component({
  selector: 'cbp-toggle-switch',
  templateUrl: './cbp-toggle-switch.component.html',
  styleUrls: ['./cbp-toggle-switch.component.scss']
})
export class CBPToggleSwitchComponent implements OnInit {

  // @HostBinding('attr.data-on') onLabel = 'ON';

  @Input() onLabel = 'ON';
  @Input() offLabel = 'OFF';
  @Input() onValue = true;
  @Input() offValue = false;
  @Input() label: string = null;
  @Input() ngModel: any;
  @Input() required: boolean;
  @Output() changed = new EventEmitter<boolean>();


  toggleSwitchId = `cbp-toggle-sw-${toggleSwitchCounter}`;

  constructor() {
      toggleSwitchCounter++;

  }

  ngOnInit() {
  }

  valueChange($event: any) {
    this.changed.emit($event  ? this.onValue : this.offValue);
  }
}
