import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPFeedbackLinkComponent } from './feedback-link.component';

describe('CBPFeedbackLinkComponent', () => {
  let component: CBPFeedbackLinkComponent;
  let fixture: ComponentFixture<CBPFeedbackLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBPFeedbackLinkComponent ]
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
