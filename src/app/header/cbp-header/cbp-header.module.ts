import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CBPHeaderComponent} from './cbp-header.component';
import {MdIconModule, MdListModule, MdMenuModule, MdToolbarModule, MdButtonModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CBPUserModule} from '../../user/user.module';
import {CBPApplicationsModule} from '../../applications/applications.module';
import {CBPToolbarModule} from '../cbp-toolbar/cbp-toolbar.module';


@NgModule({
  imports: [
      CommonModule,
      MdListModule,
      MdMenuModule,
      MdToolbarModule,
      FlexLayoutModule,
      MdIconModule,
      MdButtonModule,
      CBPUserModule,
      CBPApplicationsModule,
      CBPToolbarModule
  ],
  declarations: [CBPHeaderComponent],
  exports: [CBPHeaderComponent, MdButtonModule, CBPUserModule, CBPApplicationsModule]
})
export class CBPHeaderModule { }
