import { TestBed, async } from '@angular/core/testing';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {DemoButtonsComponent} from './demo-buttons.component';
import {CBPButtonsModule} from 'ngx-cbp-theme';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material';

describe('DemoButtonsComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserModule, NoopAnimationsModule, CBPButtonsModule, FormsModule, MatCheckboxModule],
            declarations: [
                DemoButtonsComponent]
        }).compileComponents();
    }));

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(DemoButtonsComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

});
