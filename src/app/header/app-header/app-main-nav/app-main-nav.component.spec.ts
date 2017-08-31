import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPAppMainNavComponent } from './app-main-nav.component';

describe('CBPAppMainNavComponent', () => {
  let component: CBPAppMainNavComponent;
  let fixture: ComponentFixture<CBPAppMainNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBPAppMainNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPAppMainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
