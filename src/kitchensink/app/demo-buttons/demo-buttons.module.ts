import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DemoButtonsComponent} from './demo-buttons.component';
import {MatButtonModule} from '@angular/material';
import {CBPButtonsModule} from '../../../app/buttons/buttons.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, CBPButtonsModule, FormsModule
  ],
  exports: [DemoButtonsComponent, MatButtonModule],
  declarations: [DemoButtonsComponent]
})
export class DemoButtonsModule { }
