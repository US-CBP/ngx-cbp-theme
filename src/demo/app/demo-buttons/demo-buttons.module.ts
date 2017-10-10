import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DemoButtonsComponent} from './demo-buttons.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatButtonModule
  ],
  exports: [DemoButtonsComponent, MatButtonModule],
  declarations: [DemoButtonsComponent]
})
export class DemoButtonsModule { }
