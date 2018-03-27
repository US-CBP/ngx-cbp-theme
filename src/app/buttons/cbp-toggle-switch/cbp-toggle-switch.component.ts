import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

let toggleSwitchCounter = 1;


@Component({
  selector: 'cbp-toggle-switch',
  templateUrl: './cbp-toggle-switch.component.html',
  styleUrls: ['./cbp-toggle-switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CBPToggleSwitchComponent {

  @Input() onLabel = 'ON';
  @Input() offLabel = 'OFF';
  @Input() onValue = true;
  @Input() offValue = false;
  @Input() label: string = null;
  @Input() required: boolean;
  @Input() disabled: boolean;
  @Output() changed = new EventEmitter<boolean>();

  @Input() isOn: Boolean;

  toggleSwitchId = `cbp-toggle-sw-${toggleSwitchCounter}`;

  constructor() {
      toggleSwitchCounter++;
  }


  valueChange($event: any) {
    this.isOn = $event.currentTarget.checked  ? this.onValue : this.offValue;
    this.changed.emit(this.isOn.valueOf());
  }
}
