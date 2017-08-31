import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBPRootComponent } from './cbp-root.component';
import {MdButtonModule, MdIconModule, MdIconRegistry} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {CBPProgressModule} from '../progress/progress.module';
import {CBPHeaderModule} from '../header/cbp-header/cbp-header.module';
import {CBPPipesModule} from '../pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule, MdIconModule, BrowserAnimationsModule, FlexLayoutModule, MdButtonModule
  ],
  declarations: [CBPRootComponent],
  exports: [
      CBPRootComponent, MdIconModule, BrowserAnimationsModule, FlexLayoutModule, MdButtonModule,
      CBPProgressModule, CBPHeaderModule, CBPPipesModule
  ]
})
export class CBPRootModule {
    constructor(mdIconRegistry: MdIconRegistry) {
        mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
}
