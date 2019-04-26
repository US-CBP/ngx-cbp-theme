import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPToggleSwitchComponent } from './cbp-toggle-switch.component';

describe('CBPToggleSwitchComponent', () => {
  let component: CBPToggleSwitchComponent;
  let fixture: ComponentFixture<CBPToggleSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CBPToggleSwitchComponent]
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
