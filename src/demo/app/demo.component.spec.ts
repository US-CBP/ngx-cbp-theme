import { TestBed, async } from '@angular/core/testing';

import {DemoAppComponent} from './demo.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {CBPRootModule} from '../../app/cbp-root/cbp-root.module';
import {CBPAccordionModule} from '../../app/accordion/accordion.module';
import {CBPAppHeaderModule , CBPHeaderModule} from '../../app/header';

import {DemoCBPAccordionComponent} from './demo-cbp-accordion/demo-cbp-accordion.component';
import {DemoTypographyComponent} from './demo-typograqphy/demo-typography.component';

import {DemoButtonsModule} from './demo-buttons/demo-buttons.module';
import {DemoAppHeaderModule} from './demo-app-header/demo-app-header.module';

describe('DemoAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [BrowserModule, NoopAnimationsModule,
            CBPRootModule,
            CBPAccordionModule,
            CBPHeaderModule,
            CBPAppHeaderModule,
            DemoButtonsModule,
            DemoAppHeaderModule
        ],
        declarations: [
            DemoAppComponent,
            DemoCBPAccordionComponent,
            DemoTypographyComponent]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(DemoAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
