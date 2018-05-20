import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBPFeedbackLinkComponent } from './feedback-link.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule, FlexLayoutModule
  ],
  declarations: [CBPFeedbackLinkComponent],
  exports: [CBPFeedbackLinkComponent],
})
export class CBPFeedbackModule { }
