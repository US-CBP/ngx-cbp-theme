import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPToolbarComponent } from './cbp-toolbar.component';

describe('CBPToolbarComponent', () => {
  let component: CBPToolbarComponent;
  let fixture: ComponentFixture<CBPToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBPToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
