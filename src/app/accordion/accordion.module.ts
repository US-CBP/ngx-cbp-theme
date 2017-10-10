import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CBPAccordionComponent} from './accordion.component';
import {CBPAccordionPanelComponent} from './accordion-panel.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatButtonModule
  ],
  declarations: [CBPAccordionComponent, CBPAccordionPanelComponent],
  exports: [
      CBPAccordionComponent, CBPAccordionPanelComponent
  ]
})
export class CBPAccordionModule {
}
