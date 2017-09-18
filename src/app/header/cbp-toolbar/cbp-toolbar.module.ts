import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBPToolbarComponent } from './cbp-toolbar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CBPToolbarItemComponent } from './cbp-toolbar-item/cbp-toolbar-item.component';

@NgModule({
  imports: [
    CommonModule, FlexLayoutModule
  ],
  declarations: [CBPToolbarComponent, CBPToolbarItemComponent],
  exports: [CBPToolbarComponent, CBPToolbarItemComponent]
})
export class CBPToolbarModule { }
