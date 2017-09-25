import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CBPApplicationsMenuComponent} from './applications-menu/applications-menu.component';
import {MdIconModule, MdMenuModule} from '@angular/material';
import {CBPProgressModule} from '../progress/progress.module';
import {CBPPipesModule} from '../pipes/pipes.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CBPApplicationsSearchComponent } from './applications-search/applications-search.component';

@NgModule({
  imports: [
    CommonModule, MdMenuModule, MdIconModule, CBPProgressModule, CBPPipesModule, FlexLayoutModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [CBPApplicationsMenuComponent, CBPApplicationsSearchComponent],
  exports: [CBPApplicationsMenuComponent, CBPApplicationsSearchComponent, MdMenuModule]
})
export class CBPApplicationsModule { }
