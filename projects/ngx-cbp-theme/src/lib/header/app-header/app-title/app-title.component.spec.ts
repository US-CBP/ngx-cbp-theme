import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPAppTitleComponent } from './app-title.component';

describe('CBPAppTitleComponent', () => {
  let component: CBPAppTitleComponent;
  let fixture: ComponentFixture<CBPAppTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBPAppTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPAppTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
