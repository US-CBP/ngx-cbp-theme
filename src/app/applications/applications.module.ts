import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CBPApplicationsMenuComponent} from './applications-menu/applications-menu.component';
import {
    MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule,
    MatMenuModule
} from '@angular/material';
import {CBPProgressModule} from '../progress/progress.module';
import {CBPPipesModule} from '../pipes/pipes.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CBPApplicationsSearchComponent } from './applications-search/applications-search.component';



@NgModule({
  imports: [
    CommonModule, MatMenuModule, MatIconModule, FlexLayoutModule, FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule,
    MatDividerModule, CBPProgressModule, CBPPipesModule
  ],
  declarations: [CBPApplicationsMenuComponent, CBPApplicationsSearchComponent],
  exports: [CBPApplicationsMenuComponent, CBPApplicationsSearchComponent]
})
export class CBPApplicationsModule { }
