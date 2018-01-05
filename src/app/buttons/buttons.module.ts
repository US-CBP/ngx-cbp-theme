import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBPToggleSwitchComponent } from './cbp-toggle-switch/cbp-toggle-switch.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  exports: [CBPToggleSwitchComponent],
  declarations: [CBPToggleSwitchComponent]
})
export class CBPButtonsModule { }
