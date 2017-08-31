import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPApplicationsMenuComponent } from './applications-menu.component';

describe('CBPApplicationsMenuComponent', () => {
  let component: CBPApplicationsMenuComponent;
  let fixture: ComponentFixture<CBPApplicationsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBPApplicationsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPApplicationsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
