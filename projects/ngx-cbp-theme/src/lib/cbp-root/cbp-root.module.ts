import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBPRootComponent } from './cbp-root.component';
import {
    MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatIconRegistry,
    MatInputModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BREAKPOINTS, DEFAULT_BREAKPOINTS, FlexLayoutModule, ORIENTATION_BREAKPOINTS } from '@angular/flex-layout';
import {CBPProgressModule} from '../progress/progress.module';
import {CBPHeaderModule} from '../header/cbp-header/cbp-header.module';
import {CBPPipesModule} from '../pipes/pipes.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, MatIconModule, BrowserAnimationsModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule,
    FlexLayoutModule.withConfig({useColumnBasisZero: true}, [...DEFAULT_BREAKPOINTS, ...ORIENTATION_BREAKPOINTS])
  ],
  declarations: [CBPRootComponent],
  providers: [{ provide: BREAKPOINTS, useValue: [...DEFAULT_BREAKPOINTS, ...ORIENTATION_BREAKPOINTS]}],
  exports: [
      MatIconModule, BrowserAnimationsModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule,
      MatDividerModule, CBPRootComponent, CBPProgressModule, CBPHeaderModule, CBPPipesModule
  ]
})
export class CBPRootModule {
    constructor(mdIconRegistry: MatIconRegistry) {
        mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
}
