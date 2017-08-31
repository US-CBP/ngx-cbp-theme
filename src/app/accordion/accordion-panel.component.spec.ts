import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPAccordionPanelComponent } from './accordion-panel.component';
import {MdButtonModule} from '@angular/material';
import {CBPAccordionComponent} from './accordion.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('CBPAccordionPanelComponent', () => {
  let component: CBPAccordionPanelComponent;
  let fixture: ComponentFixture<CBPAccordionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [MdButtonModule, NoopAnimationsModule],
        declarations: [CBPAccordionPanelComponent],
        providers: [CBPAccordionComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPAccordionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
