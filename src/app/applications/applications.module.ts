import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CBPApplicationsMenuComponent} from './applications-menu/applications-menu.component';
import {MdFormFieldModule, MdIconModule, MdInputModule, MdMenuModule} from '@angular/material';
import {CBPProgressModule} from '../progress/progress.module';
import {CBPPipesModule} from '../pipes/pipes.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CBPApplicationsSearchComponent } from './applications-search/applications-search.component';



@NgModule({
  imports: [
    CommonModule, MdMenuModule, MdIconModule, FlexLayoutModule, FormsModule, ReactiveFormsModule, MdInputModule, MdFormFieldModule,
    CBPProgressModule, CBPPipesModule
  ],
  declarations: [CBPApplicationsMenuComponent, CBPApplicationsSearchComponent],
  exports: [CBPApplicationsMenuComponent, CBPApplicationsSearchComponent]
})
export class CBPApplicationsModule { }
