import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CBPHeaderComponent} from './cbp-header.component';
import {MdIconModule, MdListModule, MdMenuModule, MdToolbarModule, MdButtonModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CBPProgressModule} from '../../progress/progress.module';
import {CBPPipesModule} from '../../pipes/pipes.module';
import { CBPApplicationsMenuComponent } from './applications-menu/applications-menu.component';
import {CBPUserModule} from '../../user/user.module';


@NgModule({
  imports: [
      CommonModule,
      MdListModule,
      MdMenuModule,
      MdToolbarModule,
      FlexLayoutModule,
      MdIconModule,
      MdButtonModule,
      CBPProgressModule,
      CBPUserModule,
      CBPPipesModule
  ],
  declarations: [CBPHeaderComponent, CBPApplicationsMenuComponent],
  exports: [CBPHeaderComponent, MdButtonModule, CBPProgressModule, CBPUserModule]
})
export class CBPHeaderModule { }
