import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DemoButtonsComponent} from './demo-buttons.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {CBPButtonsModule} from '../../../app/buttons/buttons.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, CBPButtonsModule, FormsModule, MatCheckboxModule
  ],
  exports: [DemoButtonsComponent, MatButtonModule],
  declarations: [DemoButtonsComponent]
})
export class DemoButtonsModule { }
