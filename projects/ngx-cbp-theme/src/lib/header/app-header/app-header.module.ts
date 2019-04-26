import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CBPToolbarModule } from '../cbp-toolbar/cbp-toolbar.module';
import { CBPAppHeaderComponent } from './app-header.component';
import { APP_HEADER_STATE, CBPToolbarState } from '../cbp-toolbar/cbp-toolbar-state';


@NgModule({
  imports: [
    CommonModule, MatTabsModule, MatListModule, MatMenuModule, MatToolbarModule, FlexLayoutModule, MatButtonModule, MatIconModule,
    CBPToolbarModule
  ],
  declarations: [CBPAppHeaderComponent],
  exports: [CBPAppHeaderComponent],
  providers: [{provide: APP_HEADER_STATE, useClass: CBPToolbarState}]
})
export class CBPAppHeaderModule {
}
