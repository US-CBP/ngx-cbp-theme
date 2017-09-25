import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPApplicationsSearchComponent } from './applications-search.component';

describe('CBPApplicationsSearchComponent', () => {
  let component: CBPApplicationsSearchComponent;
  let fixture: ComponentFixture<CBPApplicationsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBPApplicationsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPApplicationsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
