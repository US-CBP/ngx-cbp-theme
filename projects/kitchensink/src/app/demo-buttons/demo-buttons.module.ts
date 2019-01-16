import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  DemoButtonsComponent
} from './demo-buttons.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule
} from '@angular/material';
import {
  CBPButtonsModule
} from 'ngx-cbp-theme';
import {
  FormsModule
} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    CBPButtonsModule,
    FormsModule,
    MatCheckboxModule,
    MatCardModule
  ],
  exports: [DemoButtonsComponent, MatButtonModule],
  declarations: [DemoButtonsComponent]
})
export class DemoButtonsModule {}
