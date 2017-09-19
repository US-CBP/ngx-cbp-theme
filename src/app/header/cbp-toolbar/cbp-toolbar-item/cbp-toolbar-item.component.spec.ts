import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPToolbarItemComponent } from './cbp-toolbar-item.component';

describe('CBPToolbarItemComponent', () => {
  let component: CBPToolbarItemComponent;
  let fixture: ComponentFixture<CBPToolbarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBPToolbarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPToolbarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
