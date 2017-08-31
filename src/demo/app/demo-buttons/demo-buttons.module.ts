import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DemoButtonsComponent} from './demo-buttons.component';
import {MdButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MdButtonModule
  ],
  exports: [DemoButtonsComponent, MdButtonModule],
  declarations: [DemoButtonsComponent]
})
export class DemoButtonsModule { }
