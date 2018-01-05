import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DemoButtonsComponent} from './demo-buttons.component';
import {MatButtonModule} from '@angular/material';
import {CBPButtonsModule} from '../../../app/buttons/buttons.module';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, CBPButtonsModule
  ],
  exports: [DemoButtonsComponent, MatButtonModule],
  declarations: [DemoButtonsComponent]
})
export class DemoButtonsModule { }
