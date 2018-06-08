import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CBPAppTitleComponent } from './app-title/app-title.component';
import { CBPAppMainNavComponent } from './app-main-nav/app-main-nav.component';
import { CBPAppRightNavComponent } from './app-right-nav/app-right-nav.component';
import {CBPToolbarModule} from '../cbp-toolbar/cbp-toolbar.module';
import {CBPAppHeaderComponent} from './app-header.component';
import {APP_HEADER_STATE, CBPToolbarState} from '../cbp-toolbar/cbp-toolbar-state';


@NgModule({
  imports: [
    CommonModule, MatTabsModule, MatListModule, MatMenuModule, MatToolbarModule, FlexLayoutModule, MatButtonModule, MatIconModule,
    CBPToolbarModule
  ],
  declarations: [CBPAppHeaderComponent, CBPAppTitleComponent, CBPAppMainNavComponent, CBPAppRightNavComponent],
  exports: [CBPAppHeaderComponent, CBPAppTitleComponent, CBPAppMainNavComponent, CBPAppRightNavComponent],
  providers: [{provide: APP_HEADER_STATE, useClass: CBPToolbarState}]
})
export class CBPAppHeaderModule { }
