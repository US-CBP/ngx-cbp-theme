import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBPToolbarComponent } from './cbp-toolbar.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule, FlexLayoutModule
  ],
  declarations: [CBPToolbarComponent],
  exports: [CBPToolbarComponent]
})
export class CBPToolbarModule { }
