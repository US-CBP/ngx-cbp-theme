import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CBPAppHeaderComponent} from './app-header.component';
import {
    MdButtonModule, MdCoreModule, MdIconModule, MdListModule, MdMenuModule, MdTabsModule,
    MdToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CBPAppTitleComponent } from './app-title/app-title.component';
import { CBPAppMainNavComponent } from './app-main-nav/app-main-nav.component';
import { CBPAppRightNavComponent } from './app-right-nav/app-right-nav.component';
import {CBPToolbarModule} from '../cbp-toolbar/cbp-toolbar.module';

export * from './app-header.component';


@NgModule({
  imports: [
    CommonModule, MdTabsModule, MdListModule, MdMenuModule, MdToolbarModule, FlexLayoutModule, MdButtonModule, MdIconModule, MdCoreModule,
    CBPToolbarModule
  ],
  declarations: [CBPAppHeaderComponent, CBPAppTitleComponent, CBPAppMainNavComponent, CBPAppRightNavComponent],
  exports: [CBPAppHeaderComponent, CBPAppTitleComponent, CBPAppMainNavComponent, CBPAppRightNavComponent]
})
export class CBPAppHeaderModule { }
