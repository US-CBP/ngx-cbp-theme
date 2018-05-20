import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBPBrandComponent } from './cbp-brand.component';

describe('CBPBrandComponent', () => {
  let component: CBPBrandComponent;
  let fixture: ComponentFixture<CBPBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBPBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
