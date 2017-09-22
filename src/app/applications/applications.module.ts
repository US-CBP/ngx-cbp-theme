import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CBPApplicationsMenuComponent} from './applications-menu/applications-menu.component';
import {MdIconModule, MdMenuModule} from '@angular/material';
import {CBPProgressModule} from '../progress/progress.module';
import {CBPPipesModule} from '../pipes/pipes.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, MdMenuModule, MdIconModule, CBPProgressModule, CBPPipesModule, FlexLayoutModule, FormsModule
  ],
  declarations: [CBPApplicationsMenuComponent],
  exports: [CBPApplicationsMenuComponent, MdMenuModule]
})
export class CBPApplicationsModule { }
