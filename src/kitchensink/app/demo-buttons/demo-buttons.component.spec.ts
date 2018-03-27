import { TestBed, async } from '@angular/core/testing';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {DemoButtonsComponent} from './demo-buttons.component';
import {CBPButtonsModule} from '../../../app/buttons/buttons.module';
import {FormsModule} from '@angular/forms';

describe('DemoButtonsComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserModule, NoopAnimationsModule, CBPButtonsModule, FormsModule],
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
