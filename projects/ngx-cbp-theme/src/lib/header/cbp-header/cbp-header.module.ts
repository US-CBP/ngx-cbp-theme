import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBPHeaderComponent } from './cbp-header.component';
import { MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CBPUserModule } from '../../user/user.module';
import { CBPApplicationsModule } from '../../applications/applications.module';
import { CBPToolbarModule } from '../cbp-toolbar/cbp-toolbar.module';
import { CBPFeedbackModule } from '../../feedback/feedback.module';
import { CBP_HEADER_STATE, CBPToolbarState } from '../cbp-toolbar/cbp-toolbar-state';


@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    CBPUserModule,
    CBPApplicationsModule,
    CBPToolbarModule,
    CBPFeedbackModule
  ],
  declarations: [CBPHeaderComponent],
  exports: [
    CBPHeaderComponent,
    MatButtonModule,
    CBPUserModule,
    CBPApplicationsModule,
    CBPToolbarModule,
    CBPFeedbackModule],
  providers: [{provide: CBP_HEADER_STATE, useClass: CBPToolbarState}]
})
export class CBPHeaderModule {
}
