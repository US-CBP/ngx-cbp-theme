import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CBPRootModule} from './cbp-root/cbp-root.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {CBPAccordionModule} from './accordion/accordion.module';
import {CBPHeaderModule} from './header/cbp-header/cbp-header.module';
import {CBPAppHeaderModule} from './header/app-header/app-header.module';
import {CBPProgressModule} from './progress/progress.module';
import {CBPHeaderComponent} from './header/cbp-header/cbp-header.component';
import {CBPRootComponent} from './cbp-root/cbp-root.component';

@NgModule({
    imports: [
        BrowserModule,
        CBPRootModule,
        CBPAccordionModule,
        CBPHeaderModule,
        CBPAppHeaderModule,
        CBPProgressModule
    ],
    providers: [],
    schemas: [],
    bootstrap: [CBPRootComponent]
})
export class TestEntryModule {
    constructor() {}
}



platformBrowserDynamic().bootstrapModule(TestEntryModule);
export * from './index';
