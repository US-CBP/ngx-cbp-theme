import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPToggleSwitchComponent } from './cbp-toggle-switch.component';
import {CBPButtonsModule} from '../buttons.module';

describe('CBPToggleSwitchComponent', () => {
  let component: CBPToggleSwitchComponent;
  let fixture: ComponentFixture<CBPToggleSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CBPButtonsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPToggleSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
