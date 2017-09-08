import {NgModule} from '@angular/core';

import {CBPHeaderModule} from './header';
import {CBPAccordionModule} from './accordion/index';
import {CBPRootModule} from './cbp-root';
import {CBPAppHeaderModule} from './header';
import {CBPProgressModule} from './progress/progress.module';

const ALL_MODULES = [CBPHeaderModule, CBPAccordionModule, CBPRootModule, CBPAppHeaderModule, CBPProgressModule];

/**
 * Use individual modules instead of NgxCBPModule. This module strictly serves as entry module for AOT & testing.
 */
@NgModule({
    imports: ALL_MODULES,
    exports: ALL_MODULES
})
export class NgxCBPModule {}


export * from './cbp-root/index';
export * from './accordion/index';
export * from './header/index';
export * from './user/index';
export * from './applications/index';
export * from './progress/index';
