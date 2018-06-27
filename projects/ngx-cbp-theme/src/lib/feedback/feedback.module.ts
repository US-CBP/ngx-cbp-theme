import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBPFeedbackLinkComponent } from './feedback-link.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, FlexLayoutModule, MatButtonModule, MatIconModule
  ],
  declarations: [CBPFeedbackLinkComponent],
  exports: [CBPFeedbackLinkComponent],
})
export class CBPFeedbackModule { }
