import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBPToolbarComponent } from './cbp-toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule, FlexLayoutModule, BrowserAnimationsModule
  ],
  declarations: [CBPToolbarComponent],
  exports: [CBPToolbarComponent]
})
export class CBPToolbarModule {
}
