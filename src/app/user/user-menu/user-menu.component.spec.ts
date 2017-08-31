import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPUserMenuComponent } from './user-menu.component';

describe('CBPUserMenuComponent', () => {
  let component: CBPUserMenuComponent;
  let fixture: ComponentFixture<CBPUserMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBPUserMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
