import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPFeedbackLinkComponent } from './feedback-link.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CBPFeedbackLinkComponent', () => {
  let component: CBPFeedbackLinkComponent;
  let fixture: ComponentFixture<CBPFeedbackLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CBPFeedbackLinkComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPFeedbackLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
