import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    CBPToggleSwitchComponent,
    CBPToggleSwitchMatCheckboxLabelDirective
} from './cbp-toggle-switch/cbp-toggle-switch.component';
import {FormsModule} from '@angular/forms';
import { MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, FormsModule, MatCheckboxModule
  ],
  exports: [CBPToggleSwitchComponent, CBPToggleSwitchMatCheckboxLabelDirective],
  declarations: [CBPToggleSwitchComponent, CBPToggleSwitchMatCheckboxLabelDirective]
})
export class CBPButtonsModule { }
