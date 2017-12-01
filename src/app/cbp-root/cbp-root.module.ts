import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBPRootComponent } from './cbp-root.component';
import {
    MatButtonModule, MatFormFieldModule, MatIconModule, MatIconRegistry,
    MatInputModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {CBPProgressModule} from '../progress/progress.module';
import {CBPHeaderModule} from '../header/cbp-header/cbp-header.module';
import {CBPPipesModule} from '../pipes/pipes.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, MatIconModule, BrowserAnimationsModule, FlexLayoutModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule
  ],
  declarations: [CBPRootComponent],
  exports: [
      MatIconModule, BrowserAnimationsModule, FlexLayoutModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule,
      CBPRootComponent, CBPProgressModule, CBPHeaderModule, CBPPipesModule
  ]
})
export class CBPRootModule {
    constructor(mdIconRegistry: MatIconRegistry) {
        mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
}
