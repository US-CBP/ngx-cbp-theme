import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoAppHeaderComponent } from './demo-app-header.component';
import { CBPAppHeaderModule} from 'ngx-cbp-theme';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatMenuModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    CBPAppHeaderModule,
    MatIconModule,
    MatTabsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule
  ],
  declarations: [DemoAppHeaderComponent],
  exports: [DemoAppHeaderComponent]
})
export class DemoAppHeaderModule { }
