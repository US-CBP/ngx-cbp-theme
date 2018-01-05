import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CBPRootModule} from './cbp-root/cbp-root.module';
import {CBPAccordionModule} from './accordion/accordion.module';
import {CBPHeaderModule} from './header/cbp-header/cbp-header.module';
import {CBPAppHeaderModule} from './header/app-header/app-header.module';
import {CBPProgressModule} from './progress/progress.module';
import {CBPRootComponent} from './cbp-root/cbp-root.component';
import {CBPButtonsModule} from './buttons/buttons.module';


@NgModule({
    imports: [
        BrowserModule,
        CBPRootModule,
        CBPAccordionModule,
        CBPHeaderModule,
        CBPAppHeaderModule,
        CBPProgressModule,
        CBPButtonsModule
    ],
    providers: [],
    schemas: [],
    bootstrap: [CBPRootComponent]
})
export class TestEntryModule {
    constructor() {}
}
