import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CBPToggleSwitchComponent } from './cbp-toggle-switch/cbp-toggle-switch.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  exports: [CBPToggleSwitchComponent],
  declarations: [CBPToggleSwitchComponent]
})
export class CBPButtonsModule {
}
