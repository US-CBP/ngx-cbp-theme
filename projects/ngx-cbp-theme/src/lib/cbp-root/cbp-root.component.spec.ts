import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPRootComponent } from './cbp-root.component';

describe('CBPRootComponent', () => {
  let component: CBPRootComponent;
  let fixture: ComponentFixture<CBPRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CBPRootComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
