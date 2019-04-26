import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPLoadingComponent } from './loading.component';

describe('CBPLoadingComponent', () => {
  let component: CBPLoadingComponent;
  let fixture: ComponentFixture<CBPLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CBPLoadingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
