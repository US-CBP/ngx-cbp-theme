import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAppHeaderComponent } from './demo-app-header.component';
import {CommonModule} from '@angular/common';
import {CBPAppHeaderModule} from '../../../app/header/app-header/app-header.module';
import {MdIconModule, MdTabsModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('DemoAppHeaderComponent', () => {
  let component: DemoAppHeaderComponent;
  let fixture: ComponentFixture<DemoAppHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ CommonModule, CBPAppHeaderModule, MdIconModule, MdTabsModule, FlexLayoutModule, NoopAnimationsModule],
        declarations: [ DemoAppHeaderComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
