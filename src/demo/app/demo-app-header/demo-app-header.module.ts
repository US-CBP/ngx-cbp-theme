import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoAppHeaderComponent } from './demo-app-header.component';
import {CBPAppHeaderModule} from '../../../app/header/app-header/app-header.module';
import {MdIconModule, MdTabsModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule, CBPAppHeaderModule, MdIconModule, MdTabsModule, FlexLayoutModule
  ],
  declarations: [DemoAppHeaderComponent],
  exports: [DemoAppHeaderComponent]
})
export class DemoAppHeaderModule { }
