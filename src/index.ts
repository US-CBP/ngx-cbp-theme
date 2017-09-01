import {NgModule} from '@angular/core';

import {CBPHeaderModule} from './app/header/';
import {CBPAccordionModule} from './app/accordion/index';
import {CBPRootModule} from './app/cbp-root/';
import {CBPAppHeaderModule} from './app/header/';
import {CBPProgressModule} from './app/progress/progress.module';

const ALL_MODULES = [CBPHeaderModule, CBPAccordionModule, CBPRootModule, CBPAppHeaderModule, CBPProgressModule];

/**
 * Use individual modules instead of NgxCBPModule. This module strictly serves as entry module for AOT & testing.
 */
@NgModule({
    imports: ALL_MODULES,
    exports: ALL_MODULES
})
export class NgxCBPModule {}


export * from './app/cbp-root/index';
export * from './app/accordion/index';
export * from './app/header/index';
export * from './app/user/index';
export * from './app/applications/index';
export * from './app/progress/index';
