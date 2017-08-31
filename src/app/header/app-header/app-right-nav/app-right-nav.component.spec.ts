import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPAppRightNavComponent } from './app-right-nav.component';

describe('CBPAppRightNavComponent', () => {
  let component: CBPAppRightNavComponent;
  let fixture: ComponentFixture<CBPAppRightNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBPAppRightNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPAppRightNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
