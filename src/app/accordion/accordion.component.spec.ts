import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPAccordionComponent } from './accordion.component';
import { MatButtonModule } from '@angular/material';

describe('CBPAccordionComponent', () => {
  let component: CBPAccordionComponent;
  let fixture: ComponentFixture<CBPAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ MatButtonModule],
        declarations: [CBPAccordionComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
