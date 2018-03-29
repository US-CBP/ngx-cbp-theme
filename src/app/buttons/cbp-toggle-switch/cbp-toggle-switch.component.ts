import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, ElementRef, EventEmitter, Input, OnChanges,
    OnInit,
    Output, Renderer2,
    ViewEncapsulation
} from '@angular/core';
import {SimpleChanges} from '@angular/core/src/metadata/lifecycle_hooks';
import {Observable} from 'rxjs/Observable';

let toggleSwitchCounter = 1;


@Component({
  selector: 'cbp-toggle-switch',
  templateUrl: './cbp-toggle-switch.component.html',
  styleUrls: ['./cbp-toggle-switch.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CBPToggleSwitchComponent implements OnChanges {

  @Input() onLabel = 'ON';
  @Input() offLabel = 'OFF';
  @Input() onValue = true;
  @Input() offValue = false;
  @Input() label: string = null;
  @Input() required: boolean;
  @Input() disabled: boolean;
  @Output() changed = new EventEmitter<boolean>();

  @Input() isOn: Observable<any>;

  toggleSwitchId = `cbp-toggle-sw-${toggleSwitchCounter}`;

  constructor(private ref: ChangeDetectorRef) {
      toggleSwitchCounter++;
  }

  ngOnChanges(change: SimpleChanges) {
    this.isOn = change.isOn.currentValue;
    this.ref.detectChanges();
    console.log(arguments);
  }

  valueChange($event: any) {
    // this.isOn = $event.currentTarget.checked  ? this.onValue : this.offValue;
    // this.changed.emit(this.isOn);
  }
}
@Directive({
    selector: '[cbpToggleSwitchFormName], cbp-toggle-switch[ngFormName]'
})
export class CBPToggleSwitchFormNameDirective {}

/****/
@Directive({
    selector: '[cbpToggleSwitchMatCheckbox], .turn-into-apple-toggle-switch'
})
export class CBPToggleSwitchMatCheckboxLabelDirective implements OnInit {
    @Input() onLabel: string;
    @Input() offLabel: string;

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
      // this.el.nativeElement.
       // this.renderer.
      console.log(this.onLabel);
    }
}