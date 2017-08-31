import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBPUserMenuComponent } from './user-menu/user-menu.component';
import {MdButtonModule, MdIconModule, MdListModule, MdMenuModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CBPProgressModule} from '../progress/progress.module';

@NgModule({
  imports: [
      CommonModule, MdListModule, MdMenuModule, FlexLayoutModule, MdIconModule, MdButtonModule, CBPProgressModule
  ],
  exports: [CBPUserMenuComponent],
  declarations: [CBPUserMenuComponent]
})
export class CBPUserModule { }
