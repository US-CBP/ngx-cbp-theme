import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { CanColor, CanDisable, HasTabIndex, mixinColor, mixinDisabled, mixinTabIndex, ThemePalette } from '@angular/material/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


export class CBPToggleSwitchChange {
  checked: boolean;
  source: CBPToggleSwitchComponent;

}


export class CBPToggleSwitchComponentBase {
  constructor(public _elementRef: ElementRef) {
  }
}

export const _CBPToggleSwitchMixinBase =
  mixinTabIndex(mixinColor(mixinDisabled(CBPToggleSwitchComponentBase), 'accent'));

let toggleSwitchCounter = 1;


@Component({
  selector: 'cbp-toggle-switch',
  templateUrl: './cbp-toggle-switch.component.html',
  styleUrls: ['./cbp-toggle-switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-use-before-declare
    useExisting: forwardRef(() => CBPToggleSwitchComponent),
    multi: true
  }],
  preserveWhitespaces: false // seems to trim whitespace content
})

/* tslint:disable-next-line */
export class CBPToggleSwitchComponent extends _CBPToggleSwitchMixinBase
  implements OnInit, CanColor, CanDisable, ControlValueAccessor, HasTabIndex {

  @Input() ariaLabel = '';
  @Input() ariaLabelledby: string | null = null;

  @Input() onValue: any = true;
  @Input() offValue: any = false;
  @Input() onLabel = 'ON';
  @Input() offLabel = 'OFF';
  @Input() label = '';
  @Input() disabled: boolean;
  @Input() color: ThemePalette;
  @Input() name: string | null = null;
  @Input() tabIndex: number;

  @HostBinding('class') className = 'cbp-toggle-switch';
  @HostBinding('id') id = `cbp-toggle-switch-${++toggleSwitchCounter}`;
  @HostBinding('class.cbp-toggle-switch-checked') _checked: Boolean = null;

  @Input()
  get required(): boolean {
    return this._required;
  }

  set required(value: boolean) {
    this._required = value !== null && `${value}` !== 'false' && value !== false ? true : false;
  }

  private _required: boolean;

  inputId = this.id + 'input';

  @Output() readonly change: EventEmitter<CBPToggleSwitchChange> = new EventEmitter<CBPToggleSwitchChange>();

  constructor(elementRef: ElementRef,
              private _changeDetectorRef: ChangeDetectorRef,
              @Attribute('tabindex') tabIndex: string) {
    // tslint:disable-next-line
    super(elementRef);
    this.tabIndex = Number.parseInt(tabIndex, 10) || 0;
  }

  @Input()
  get checked(): boolean {
    return !!this._checked;
  }

  set checked(value: boolean) {
    if (value !== this.checked) {
      this._checked = value;
      this._changeDetectorRef.markForCheck();
    }
  }

  _getAriaChecked(): 'true' | 'false' | 'mixed' {
    return this._checked === null || this._checked === undefined ? 'mixed' : this._checked ? 'true' : 'false';
  }

  _stopPropogation($event: Event) {
    $event.stopPropagation();
  }

  _onClick($event: Event) {
    $event.stopPropagation();
    if (!this.disabled) {
      this._checked = !this.checked;
      this._emitChangeEvent();
    }

  }

  private _emitChangeEvent() {
    const event = new CBPToggleSwitchChange();
    event.source = this;
    event.checked = this.checked;

    this._controlValueAccessorChangeFn(this.checked ? this.onValue : this.offValue);
    this.change.emit(event);
  }

  // just to avoid TypeScript error - it is going to get overwritten by ControlValueAccessor impl of registerOnChange
  private _controlValueAccessorChangeFn: (value: any) => void = () => {};

  ngOnInit() {
  }


  writeValue(obj: any): void {
    this.checked = obj === this.onValue;
  }

  registerOnChange(fn: any): void {
    // for synchronization of values from the downstream components form value
    this._controlValueAccessorChangeFn = fn;
  }

  /**
   * Focus control not implemented yet
   */
  registerOnTouched(): void {
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
  }
}

