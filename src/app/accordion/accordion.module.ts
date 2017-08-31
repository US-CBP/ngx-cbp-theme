import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CBPAccordionComponent} from './accordion.component';
import {CBPAccordionPanelComponent} from './accordion-panel.component';
import {MdButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MdButtonModule
  ],
  declarations: [CBPAccordionComponent, CBPAccordionPanelComponent],
  exports: [
      CBPAccordionComponent, CBPAccordionPanelComponent
  ]
})
export class CBPAccordionModule {
}
